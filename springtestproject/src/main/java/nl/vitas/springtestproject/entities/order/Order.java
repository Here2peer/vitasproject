package nl.vitas.springtestproject.entities.order;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import nl.vitas.springtestproject.entities.stop.Stop;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String orderNumber;

    private String description;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "order", cascade = CascadeType.DETACH)
    private Set<Stop> stops = new HashSet<>();


    public Order(String orderNumber, String description) {
        this.orderNumber = orderNumber;
        this.description = description;
    }
    public Order(String orderNumber) {
        this.orderNumber = orderNumber;
    }

    public Order() {

    }

    public Long getId() {
        return this.id;
    }

    public String getOrderNumber() {
        return orderNumber;
    }

    public String getDescription() {
        return description;
    }

    public void setOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<Stop> getStops() {
        return new HashSet<>(stops);
    }

    public void setStops(Set<Stop> stops) {
        this.stops = stops;
    }

    public void addStop(Stop stop) {
        this.stops.add(stop);
    }

}
