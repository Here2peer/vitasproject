package nl.vitas.springtestproject.entities.ride;

import jakarta.persistence.*;
import lombok.Data;
import nl.vitas.springtestproject.entities.stop.Stop;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;


@Entity
@Data
@Table(name = "rides")
public class Ride {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Integer rideNumber;

    private Timestamp timeStamp;

    private String description;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "ride", cascade = CascadeType.ALL)
    private Set<Stop> stops = new HashSet<>();

    private boolean isFinished = false;

    public Ride(Integer rideNumber, Timestamp timeStamp, String description) {
        this.rideNumber = rideNumber;
        this.timeStamp = timeStamp;
        this.description = description;
    }
    public Ride(Integer rideNumber, Timestamp timeStamp, String description, Set<Stop> stops) {
        this.rideNumber = rideNumber;
        this.timeStamp = timeStamp;
        this.description = description;
    }

    public Ride() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getRideNumber() {
        return rideNumber;
    }

    public void setRideNumber(Integer rideNumber) {
        this.rideNumber = rideNumber;
    }

    public Timestamp getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(Timestamp timeStamp) {
        this.timeStamp = timeStamp;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<Stop> getStops() {
        return new HashSet<>(this.stops);
    }

    public void setStops(Set<Stop> stops) {
        this.stops = stops;
    }

    public boolean isFinished() {
        if (!isFinished && !stops.isEmpty()) {
            for (Stop stop : stops) {
                if (!stop.HasBeenVisited()) {
                    return false;
                }
            }
            isFinished = true;
            return true;
        }
        return false;
    }

    public void addStop(Stop stop) throws RideException {
        if (isFinished) {
            throw new RideException("Cannot add stop to a finished ride");
        } else {
            this.stops.add(stop);
            stop.setRide(this);
        }
    }
}
