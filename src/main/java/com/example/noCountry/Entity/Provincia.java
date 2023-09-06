package com.example.noCountry.Entity;

import jakarta.persistence.*;
import lombok.Data;


import java.util.List;

@Entity
@Data
public class Provincia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;

    @OneToMany(mappedBy = "provincia")
    private List <Ciudad> ciudades;

}



