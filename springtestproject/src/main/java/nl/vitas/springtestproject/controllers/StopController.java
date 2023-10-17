package nl.vitas.springtestproject.controllers;

import nl.vitas.springtestproject.entities.ride.Ride;
import nl.vitas.springtestproject.entities.ride.data.RideRepository;
import nl.vitas.springtestproject.entities.stop.Stop;
import nl.vitas.springtestproject.entities.stop.data.StopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class StopController {
    @Autowired
    private StopRepository stopRepository;

    @Autowired
    private RideRepository rideRepository;

    @GetMapping("/stops")
    public List<Stop> getAllStops() {
        List<Stop> stops = new ArrayList<>();
        for (Stop stop : stopRepository.findAll()) {
            stops.add(stop);
        }
        return stops;
    }

    @GetMapping("/stop/{id}")
    public ResponseEntity<Stop> getAllStops(@PathVariable Long id) {
        Stop stop = stopRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Stop not found for id :: " + id));

        return ResponseEntity.ok(stop);
    }

    @PostMapping("/stop")
    public ResponseEntity<Stop> createStop(@RequestBody Stop stop) {
        try {
            Stop _stop = stopRepository.save(new Stop(stop.getStopNumber(), stop.getPostcode(), stop.getHouseNumber()));
            return ResponseEntity.ok(_stop);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/stop/{id}")
    public ResponseEntity<Stop> updateStop(@PathVariable Long id, @RequestBody Stop stop) {
        Stop _stop = stopRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Stop not found for id :: " + id));

        _stop.setStopNumber(stop.getStopNumber());
        _stop.setPostcode(stop.getPostcode());
        _stop.setHouseNumber(stop.getHouseNumber());
        return ResponseEntity.ok(stopRepository.save(_stop));
    }

    @PatchMapping("/stop/{stopId}/ride/{rideID}")
    public ResponseEntity<Stop> connectStopToRide(@PathVariable Long stopId, @PathVariable Long rideId) {
        Stop _stop = stopRepository.findById(stopId)
                .orElseThrow(() -> new RuntimeException("Stop not found for id :: " + stopId));
        Ride _ride = rideRepository.findById(rideId)
                .orElseThrow(() -> new RuntimeException("Ride not found for id :: " + rideId));

        _stop.setRide(_ride);
        _ride.addStop(_stop);
        return ResponseEntity.ok(stopRepository.save(_stop));
    }
}
