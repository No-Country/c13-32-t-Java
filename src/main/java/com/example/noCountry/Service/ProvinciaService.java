package com.example.noCountry.Service;

import com.example.noCountry.Entity.Provincia;
import com.example.noCountry.Repository.ProvinciaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProvinciaService {
    @Autowired
    private ProvinciaRepository provinciaRepository;

    public List<Provincia> getAllProvincias() {
        return provinciaRepository.findAll();
    }
}
