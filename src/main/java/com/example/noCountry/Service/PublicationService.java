
package com.example.noCountry.Service;

import com.example.noCountry.DTO.PublicationDTO;
import com.example.noCountry.Entity.Publication;
import com.example.noCountry.Repository.PublicationRepository;
import jakarta.transaction.Transactional;
import java.util.ArrayList;
import java.util.Optional;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PublicationService {

    @Autowired
    private PublicationRepository publicationRepository;
    
    public ArrayList<Publication> findAll() {
        return (ArrayList<Publication>) publicationRepository.findAll();
    }

    public Optional<Publication> findById(UUID id) {
        return publicationRepository.findById(id);
    }

    public Optional<ArrayList<Publication>> findByKeywords(String keywords) {
        return publicationRepository.viewByKeywords(keywords);
    }

    @Transactional
    public void insertNewPublication(PublicationDTO newPublication){
        try {
            Publication auxPublication = new Publication(
                    newPublication.getName(),
                    newPublication.getBody(),
                    newPublication.getOwner(),
                    newPublication.getKeywords(),
                    newPublication.getLocation()
            );
            
            publicationRepository.save(auxPublication);
        } catch (Exception e){
            throw e; 
        }
    }

    @Transactional
    public void updatePublication(Publication oldPublication, PublicationDTO updatePublication) {
        try {
            if (updatePublication.getBody() != null){
                oldPublication.setBody(updatePublication.getBody());
            }
            if (updatePublication.getKeywords() != null){
                oldPublication.setKeywords(updatePublication.getKeywords());
            }
            if (updatePublication.getLocation() != null){
                oldPublication.setLocation(updatePublication.getLocation());
            }
            if (updatePublication.getOwner() != null){
                oldPublication.setOwner(updatePublication.getOwner());
            }
            if (updatePublication.getLocation() != null){
                oldPublication.setLocation(updatePublication.getLocation());
            }
            publicationRepository.save(oldPublication);
        } catch (Exception e){
            throw e;
        }
    }

    @Transactional
    public void deleteById(UUID id) {
        try {
            publicationRepository.deleteById(id);
        } catch (Exception e) {
            throw e;
        }
    }
}
