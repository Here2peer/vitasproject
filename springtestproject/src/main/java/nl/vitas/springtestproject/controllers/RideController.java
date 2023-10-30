package nl.vitas.springtestproject.controllers;

import nl.vitas.springtestproject.entities.ride.Ride;
import nl.vitas.springtestproject.entities.ride.data.RideRepository;
import nl.vitas.springtestproject.entities.stop.Stop;
import nl.vitas.springtestproject.entities.stop.data.StopRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class RideController {

    @Autowired
    private RideRepository rideRepository;

    @Autowired
    private StopRepository stopRepository;

    @GetMapping("/rides")
    public List<Ride> getAllRides() {
        List<Ride> rides = new ArrayList<>();
        for (Ride ride : rideRepository.findAll()) {
            rides.add(ride);
        }
        return rides;
    }

    @GetMapping("/ride/{id}")
    public ResponseEntity<Ride> getAllRides(@PathVariable Long id) {
        Ride ride = rideRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ride not found for id :: " + id));

        return new ResponseEntity<>(ride, HttpStatus.OK);
    }

    @GetMapping("/rides/amount")
    public ResponseEntity<Long> getAmountOfRides() {
        return new ResponseEntity<>(rideRepository.count(), HttpStatus.OK);
    }

    @PostMapping("/ride")
    public ResponseEntity<Ride> createRide(@RequestBody Ride ride) {

        ModelMapper modelMapper = new ModelMapper();
        Ride _ride = modelMapper.map(ride, Ride.class);

        if (_ride.getTimeStamp() == null) {
            Timestamp timestamp = new Timestamp(System.currentTimeMillis());
            _ride.setTimeStamp(timestamp);
        }

        try {
            if (!ride.getStops().isEmpty()) {
                for (Stop stop : ride.getStops()) {
                    _ride.addStop(stop);
                    stop.setRide(_ride);
                    if (stop.getOrder() != null) {
                        stop.setOrder(stop.getOrder());
                    }
                    stopRepository.save(stop);
                }
            }
            rideRepository.save(_ride);
            return ResponseEntity.ok(_ride);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/ride/{id}")
    public ResponseEntity<Ride> updateRide(@PathVariable Long id, @RequestBody Ride ride) {
        Optional<Ride> rideData = rideRepository.findById(id);
        if (rideData.isPresent()) {
            Ride _ride = rideData.get();
            _ride.setRideNumber(ride.getRideNumber());
            _ride.setTimeStamp(ride.getTimeStamp());
            _ride.setDescription(ride.getDescription());
            return ResponseEntity.ok(rideRepository.save(_ride));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PatchMapping("/ride/{rideId}/stop/{stopId}")
    public ResponseEntity<Ride> connectRideToStop(@PathVariable Long rideId, @PathVariable Long stopId) {
        Ride _ride = rideRepository.findById(rideId)
                .orElseThrow(() -> new RuntimeException("Ride not found for id :: " + rideId));
        Stop _stop = stopRepository.findById(stopId)
                .orElseThrow(() -> new RuntimeException("Stop not found for id :: " + stopId));

        _ride.addStop(_stop);
        _stop.setRide(_ride);
        return ResponseEntity.ok(rideRepository.save(_ride));
    }

    @DeleteMapping("/ride/{id}")
    public ResponseEntity<Ride> deleteRide(@PathVariable Long id) {
        try {
            rideRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
