package com.example.noCountry.Services;


import com.example.noCountry.Entity.Employer;
import com.example.noCountry.Repository.EmployerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class employerService {

    @Autowired
    private static EmployerRepository repo;


    public static Employer crearEmployer(Employer employer){
        employer.setActivo(1);
        return repo.save(employer);
    }


    public List<Employer> buscarEmployer(){
        return repo.findAll().stream().filter(
                m -> m.getActivo() == 1).collect(Collectors.toList());
    }

    public Employer buscarPorIdEmployer (int id){
        return repo.findById(id).get();
    }

    public void eliminarEmployer(int id){
        Employer employer = repo.findById(id).orElse(null);
        if(employer != null){
            employer.setActivo(0);
            repo.save(employer);
        }
    }



}
