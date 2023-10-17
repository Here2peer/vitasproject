package nl.vitas.springtestproject.entities.ride.data;


import nl.vitas.springtestproject.entities.ride.Ride;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Qualifier("Ride")
@Repository
public interface RideRepository extends CrudRepository<Ride, Long> {

}
