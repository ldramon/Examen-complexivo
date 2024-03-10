//Control de excepciones en la aplicacion
package com.examen.examenpractico.exception;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus
public class ResourceNotFoundException extends RuntimeException {
    private final static long serialVersionUID = 1L;

    public ResourceNotFoundException (String message) {
        super(message);
    }
}