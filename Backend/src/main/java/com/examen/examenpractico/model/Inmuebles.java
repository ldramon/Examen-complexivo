//ENTIDAD INMUEBLE
package com.examen.examenpractico.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.text.DecimalFormat;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "inmuebles")

public class Inmuebles {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)//Se generan los ID de manera automatica
    @Column(name = "id_inmuebles")
    private long id_inmuebles;

    @Column(name = "caracteristica", nullable = false)//Se le asigna un nombre a la columna de la base de datos
    private String caracteristica;

    @Column(name = "direccion", nullable = false)//Se le asigna un nombre a la columna de la base de datos
    private String direccion;

    @Column(name = "habitaciones", nullable = false)
    private Integer habitaciones;

    @Column(name = "tipo", nullable = false)
    private String tipo;

    @Column(name = "costo", nullable = false)
    private String costo;

    public long getId_inmuebles() {
        return id_inmuebles;
    }

    public void setId_inmuebles(long id_inmuebles) {
        this.id_inmuebles = id_inmuebles;
    }

    public String getCaracteristica() {
        return caracteristica;
    }

    public void setCaracteristica(String caracteristica) {
        this.caracteristica = caracteristica;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public Integer getHabitaciones() {
        return habitaciones;
    }

    public void setHabitaciones(Integer habitaciones) {
        this.habitaciones = habitaciones;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getCosto() {
        return costo;
    }

    public void setCosto(String costo) {
        this.costo = costo;
    }
}
