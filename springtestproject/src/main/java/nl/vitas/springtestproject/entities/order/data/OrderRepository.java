package nl.vitas.springtestproject.entities.order.data;

import nl.vitas.springtestproject.entities.order.Order;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Qualifier("Order")
@Repository
public interface OrderRepository extends CrudRepository<Order, Long> {

}
