//REPOSITORIO PARA ACCESO A LOS DATOS DE LA ENTIDAD INMUEBLES
package com.examen.examenpractico.repository;

import com.examen.examenpractico.model.Inmuebles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InmuebleRepository extends JpaRepository<Inmuebles, Long> {
}

