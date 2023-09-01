package com.example.noCountry.Repository;


import com.example.noCountry.Entity.Employer;
import org.springframework.data.jpa.repository.JpaRepository;


public interface EmployerRepository extends JpaRepository<Employer,Integer> {
}
