package nl.vitas.springtestproject.entities.ride;

public class RideException extends RuntimeException{

    public RideException(String message) {
        super(message);
    }

    public RideException(String message, Throwable cause) {
        super(message, cause);
    }


}
