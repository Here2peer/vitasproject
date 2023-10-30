package nl.vitas.springtestproject;

import nl.vitas.springtestproject.entities.order.Order;
import nl.vitas.springtestproject.entities.order.data.OrderRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class OrderTests {

    @Autowired
    private OrderRepository orderRepository;

    @Test
    public void OrdersArePersisted() {
        Order order = new Order("A1", "A description");
        order = orderRepository.saveAndFlush(order);
        assertTrue(orderRepository.findById(order.getId()).isPresent());
    }
}
