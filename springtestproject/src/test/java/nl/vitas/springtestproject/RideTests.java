package nl.vitas.springtestproject;

import nl.vitas.springtestproject.entities.order.data.OrderRepository;
import nl.vitas.springtestproject.entities.ride.Ride;
import nl.vitas.springtestproject.entities.ride.RideException;
import nl.vitas.springtestproject.entities.ride.data.RideRepository;
import nl.vitas.springtestproject.entities.stop.Stop;
import nl.vitas.springtestproject.entities.stop.data.StopRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Timestamp;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class RideTests {

    @Autowired
    private StopRepository stopRepository;
    @Autowired
    private RideRepository rideRepository;
    @Autowired
    private OrderRepository orderRepository;

    private Ride ride;
    private Stop stop1;
    private Stop stop2;

    @AfterEach
    public void purge() {
        stopRepository.deleteAll();
        rideRepository.deleteAll();
        orderRepository.deleteAll();
    }

    @BeforeEach
    public void init() {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        ride = new Ride( 1, timestamp, "A ride description");

        stop1 = new Stop(1, "9797LL", "10d");
        stop2 = new Stop(2, "9797LL", "10d");

        ride = rideRepository.saveAndFlush(ride);
        stop1 = stopRepository.save(stop1);
        stop2 = stopRepository.save(stop2);
    }

    @Test
    public void RidesArePersisted() {
        assertTrue(rideRepository.findById(ride.getId()).isPresent());
    }

    @Test
    public void RidesCanHaveStops() {
        ride.addStop(stop1);
        ride.addStop(stop2);
        stopRepository.save(stop1);
        stopRepository.save(stop2);
        assertEquals(2, ride.getStops().size());
    }

    @Test
    public void RideIsNotFinishedIfItHasNoStops() {
        System.out.println(ride.getStops().isEmpty());
        assertFalse(ride.isFinished());
    }
    @Test
    public void RideIsNotFinishedIfItHasStopsThatAreNotFinished() {
        ride.addStop(stop1);
        ride = rideRepository.save(ride);
        stopRepository.save(stop1);
        assertFalse(ride.isFinished());
    }

    @Test
    public void RideHasVisitedAllStops() {
        ride.addStop(stop1);
        stop1.setHasBeenVisited();
        stopRepository.save(stop1);
        ride = rideRepository.save(ride);
        assertTrue(ride.isFinished());
    }

    @Test
    public void CannotAddStopToFinishedRide() {
        stop1.setHasBeenVisited();
        stop2.setHasBeenVisited();
        ride.addStop(stop1);
        ride.addStop(stop2);
        stopRepository.save(stop1);
        stopRepository.save(stop2);

        assertTrue(ride.isFinished());
        assertThrows(RideException.class, () -> ride.addStop(stop1));
    }

}