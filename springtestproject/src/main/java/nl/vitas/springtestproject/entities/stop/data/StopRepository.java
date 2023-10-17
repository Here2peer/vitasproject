package nl.vitas.springtestproject.entities.stop.data;

import nl.vitas.springtestproject.entities.stop.Stop;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Qualifier("Stop")
@Repository
public interface StopRepository extends CrudRepository<Stop, Long> {
}
