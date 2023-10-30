package nl.vitas.springtestproject.controllers;

import com.azure.core.annotation.Get;
import nl.vitas.springtestproject.entities.order.Order;
import nl.vitas.springtestproject.entities.order.data.OrderRepository;
import nl.vitas.springtestproject.entities.stop.Stop;
import nl.vitas.springtestproject.entities.stop.data.StopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class OrderController {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private StopRepository stopRepository;

    @GetMapping("/orders")
    public List<Order> getAllOrders() {
        List<Order> orders = new ArrayList<>();
        for (Order order : orderRepository.findAll()) {
            orders.add(order);
        }
        return orders;
    }

    @GetMapping("/order/{id}")
    public ResponseEntity<Order> getAllOrders(@PathVariable Long id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found for id :: " + id));

        return ResponseEntity.ok(order);
    }

    @GetMapping("/orders/amount")
    public ResponseEntity<Long> getAmountOfOrders() {
        return ResponseEntity.ok(orderRepository.count());
    }

    @PostMapping("/order")
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        try {
            Order _order = orderRepository.save(new Order(order.getOrderNumber(), order.getDescription()));
            return ResponseEntity.ok(_order);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/order/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long id, @RequestBody Order order) {
        Order _order = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found for id :: " + id));

        _order.setOrderNumber(order.getOrderNumber());
        _order.setDescription(order.getDescription());
        return ResponseEntity.ok(orderRepository.save(_order));
    }

    @PatchMapping("/order/{orderId}/stop/{stopId}")
    public ResponseEntity<Order> connectOrderToStop(@PathVariable Long orderId, @PathVariable Long stopId) {
        Order _order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found for id :: " + orderId));
        Stop _stop = stopRepository.findById(stopId)
                .orElseThrow(() -> new RuntimeException("Stop not found for id :: " + stopId));

        _order.addStop(_stop);
        _stop.setOrder(_order);

        return ResponseEntity.ok(orderRepository.save(_order));
    }
}
