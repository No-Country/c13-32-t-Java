package com.example.noCountry.Repository;

import com.example.noCountry.Entity.Provincia;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProvinciaRepository extends JpaRepository <Provincia, Long> {
    Provincia findByNombre(String nombreProvincia);
}

