package com.example.noCountry.Repository;

import com.example.noCountry.Entity.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CiudadRepository extends JpaRepository<Ciudad, Long> {
    List<Ciudad> findByProvinciaId(Long provinciaId);
}
