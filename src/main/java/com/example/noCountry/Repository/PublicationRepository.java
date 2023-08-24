package com.example.noCountry.Repository;

import com.example.noCountry.Entity.Publication;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PublicationRepository extends JpaRepository<Publication, UUID>{
    
}
