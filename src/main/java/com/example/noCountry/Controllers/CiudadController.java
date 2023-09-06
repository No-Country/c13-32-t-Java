package com.example.noCountry.controllers;

import com.example.noCountry.Entity.Ciudad;
import com.example.noCountry.Entity.Provincia;
import com.example.noCountry.Service.CiudadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CiudadController {

    @Autowired
    private CiudadService ciudadService;

    @GetMapping("/ciudades/{provincia}")
    public ResponseEntity<List<String>> getCiudadesByProvincia(@PathVariable String provincia) {
        List<String> ciudades = ciudadService.obtenerCiudadesDesdeLaBaseDeDatos(provincia);
        return ResponseEntity.ok(ciudades);
    }

    @GetMapping("/ciudades/provincia/{provinciaId}")
    public ResponseEntity<List<Ciudad>> getCiudadesByProvinciaId(@PathVariable Long provinciaId) {
        List<Ciudad> ciudades = ciudadService.getCiudadesByProvinciaId(provinciaId);
        return ResponseEntity.ok(ciudades);
    }
}
