package nl.vitas.springtestproject;

import nl.vitas.springtestproject.entities.order.Order;
import nl.vitas.springtestproject.entities.order.data.OrderRepository;
import nl.vitas.springtestproject.entities.stop.Stop;
import nl.vitas.springtestproject.entities.stop.data.StopRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class StopTests {

    @Autowired
    private StopRepository stopRepository;

    @Autowired
    private OrderRepository orderRepository;

    private Stop stop;

    private Order order;

    @BeforeEach
    public void init() {
        stopRepository.deleteAll();
        orderRepository.deleteAll();
        Stop stop = new Stop(1, "9797LL", "10d");
        Order order = new Order("A1", "A description");
        this.stop = stopRepository.save(stop);
        this.order = orderRepository.save(order);
    }

    @Test
    public void StopsArePersisted() {
        assertTrue(stopRepository.findById(stop.getId()).isPresent());
    }

    @Test
    public void StopsCanHaveAnOrder() {
        order = orderRepository.save(order);
        stop.setOrder(order);
        stopRepository.save(stop);
        assertTrue(stopRepository.findById(stop.getId()).isPresent());
    }
}
