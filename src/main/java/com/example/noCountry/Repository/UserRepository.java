package com.example.noCountry.Repository;

import com.projectDemo.noCountry.Entity.User;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, UUID> {
    
    
}
