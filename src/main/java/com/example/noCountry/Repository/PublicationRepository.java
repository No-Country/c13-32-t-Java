package com.example.noCountry.Repository;

import com.example.noCountry.Entity.Publication;
import java.util.ArrayList;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PublicationRepository extends JpaRepository<Publication, UUID>{
    
    @Query("SELECT p FROM Publication p WHERE p.keywords LIKE %:keywords%")
    public Optional<ArrayList<Publication>> viewByKeywords(@Param("keywords") String keywords);
    
}
