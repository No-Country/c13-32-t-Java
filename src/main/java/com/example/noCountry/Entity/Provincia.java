package com.example.noCountry.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="provincia")
public class Provincia {

    @Id
    @Column(name = "id")
    private UUID id;
    private String nombre;
}
