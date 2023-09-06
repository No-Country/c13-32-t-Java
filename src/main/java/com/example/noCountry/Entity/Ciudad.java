package com.example.noCountry.Entity;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
public class Ciudad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;

    @ManyToOne
    @JoinColumn(name = "provincia_id")
    private Provincia provincia;


}