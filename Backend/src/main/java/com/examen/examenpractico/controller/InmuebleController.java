//Controlador con los METODOS SOLICITADOS
package com.examen.examenpractico.controller;


import com.examen.examenpractico.model.Inmuebles;
import com.examen.examenpractico.repository.InmuebleRepository;
import com.examen.examenpractico.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/inmuebles")

public class InmuebleController {

    @Autowired
    private InmuebleRepository inmueblesRepository;

    @GetMapping("/todos")
    public List<Inmuebles> listarInmuebless(){
        return inmueblesRepository.findAll();
    }

    @PostMapping("/crear")
    public Inmuebles registrar(@RequestBody Inmuebles inmuebles) {
        return inmueblesRepository.save(inmuebles);
    }

    @GetMapping("/{id_inmuebles}")
    public ResponseEntity<Inmuebles> buscarById(@PathVariable Long id_inmuebles){
        Inmuebles inmuebles = inmueblesRepository.findById(id_inmuebles)
                .orElseThrow(()->new ResourceNotFoundException("No existe el inmuebles con el Id: "+id_inmuebles));
        return ResponseEntity.ok(inmuebles);
    }

    @DeleteMapping("/{id_inmuebles}")
    public ResponseEntity<Map<String, Boolean>> eliminarInmuebles(@PathVariable Long id_inmuebles){
        Inmuebles inmuebles = inmueblesRepository.findById(id_inmuebles)
                .orElseThrow(()->new ResourceNotFoundException("No existe el inmuebles con el Id: "+id_inmuebles));

        inmueblesRepository.delete(inmuebles);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id_inmuebles}")
    public ResponseEntity<Inmuebles> actualizarInmuebles(@PathVariable Long id_inmuebles, @RequestBody Inmuebles inmueblesRequest) {
        Inmuebles inmuebles = inmueblesRepository.findById(id_inmuebles)
                .orElseThrow(() -> new ResourceNotFoundException("No existe un inmuebles con el ID: " +id_inmuebles));
        
        inmuebles.setCaracteristica(inmueblesRequest.getCaracteristica());
        inmuebles.setDireccion(inmueblesRequest.getDireccion());
        inmuebles.setHabitaciones(inmueblesRequest.getHabitaciones());
        inmuebles.setTipo(inmueblesRequest.getTipo());
        inmuebles.setCosto(inmueblesRequest.getCosto());

        Inmuebles inmueblesActualizado = inmueblesRepository.save(inmuebles);
        return ResponseEntity.ok(inmueblesActualizado);
    }
}







