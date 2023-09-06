package com.example.noCountry.Service;

import com.example.noCountry.Entity.Ciudad;
import com.example.noCountry.Entity.Provincia;
import com.example.noCountry.Repository.CiudadRepository;
import com.example.noCountry.Repository.ProvinciaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CiudadService {
    @Autowired
    private CiudadRepository ciudadRepository;

    @Autowired
    private ProvinciaRepository provinciaRepository;


    public List<String> obtenerCiudadesDesdeLaBaseDeDatos(String nombreProvincia) {
        Provincia provincia = provinciaRepository.findByNombre(nombreProvincia);
        if (provincia != null) {
            List<Ciudad> ciudades = provincia.getCiudades();
            return ciudades.stream().map(Ciudad::getNombre).collect(Collectors.toList());
        } else {
            return Collections.emptyList();
        }
    }

    public List<Ciudad> getCiudadesByProvinciaId(Long provinciaId) {
        return ciudadRepository.findByProvinciaId(provinciaId);
    }
}
