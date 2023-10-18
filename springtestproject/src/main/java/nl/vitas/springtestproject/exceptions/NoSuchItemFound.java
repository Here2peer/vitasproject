package nl.vitas.springtestproject.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class NoSuchItemFound extends ResponseStatusException {

    public NoSuchItemFound(String message) {
        super(HttpStatus.NOT_FOUND, message);
    }

    public NoSuchItemFound(String message, Throwable cause) {
        super(HttpStatus.NOT_FOUND , message, cause);
    }
}
