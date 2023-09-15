package com.example.noCountry.Repository;

import com.example.noCountry.Entity.Employer;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployerRepository extends JpaRepository<Employer, UUID> {

    public Optional<Employer> findByUsername(String username);
    
}
