package com.example.noCountry.controllers;

import com.example.noCountry.Entity.Provincia;
import com.example.noCountry.Service.ProvinciaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/provincias")
public class ProvinciaController {
    @Autowired
    private ProvinciaService provinciaService;

    @GetMapping
    public ResponseEntity<List<Provincia>> getAllProvincias() {
        List<Provincia> provincias = provinciaService.getAllProvincias();
        return ResponseEntity.ok(provincias);
    }
}