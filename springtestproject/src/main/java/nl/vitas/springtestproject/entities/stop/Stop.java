package nl.vitas.springtestproject.entities.stop;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import nl.vitas.springtestproject.entities.order.Order;
import nl.vitas.springtestproject.entities.ride.Ride;


@Entity
@Table(name = "stops")
public class Stop {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Integer stopNumber;

    private String postcode;

    private String houseNumber;

    private Boolean hasBeenVisited = false;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY ,cascade = CascadeType.DETACH)
    private Ride ride;


    @ManyToOne(fetch = FetchType.LAZY ,cascade = CascadeType.DETACH)
    private Order order;

    public Stop(Integer stopNumber, String postcode, String houseNumber) {
        this.stopNumber = stopNumber;
        this.postcode = postcode;
        this.houseNumber = houseNumber;
    }

    public Stop() {

    }

    public Long getId() {
        return id;
    }


    public Integer getStopNumber() {
        return stopNumber;
    }

    public String getPostcode() {
        return postcode;
    }

    public String getHouseNumber() {
        return houseNumber;
    }

    public void setStopNumber(Integer stopNumber) {
        this.stopNumber = stopNumber;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }

    public void setHouseNumber(String houseNumber) {
        this.houseNumber = houseNumber;
    }


    public Ride getRide() {
        return new Ride(ride.getRideNumber(), ride.getTimeStamp(), ride.getDescription(), ride.getStops());
    }

    public void setRide(Ride rides) {
        this.ride = rides;
    }

    public Order getOrder() {
        return new Order(order.getOrderNumber(), order.getDescription());
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Boolean getHasBeenVisited() {
        return hasBeenVisited;
    }

    public void setHasBeenVisited() {
        this.hasBeenVisited = true;
    }

}
