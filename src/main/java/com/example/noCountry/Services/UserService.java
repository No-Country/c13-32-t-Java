package com.example.noCountry.Services;

import com.example.noCountry.DTO.PublicationDTO;
import com.example.noCountry.DTO.UserDTO;
import com.example.noCountry.Entity.User;
import com.example.noCountry.Entity.Role;
import com.example.noCountry.Repository.UserRepository;
import java.lang.reflect.Field;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<User> viewAll(){
        return userRepository.findAll();
    }

    public boolean createUser(UserDTO userDTO) throws Exception {
        if (userRepository.findByEmail(userDTO.getEmail()).isPresent()){
            return false;
        }
        User newUser = initializateUser(userDTO);
        if (newUser == null){
            return false;
        }
        userRepository.save(newUser);
        return true;
    }
    
    
    
    public boolean validateFields(UserDTO validateUser) throws IllegalArgumentException, Exception{
        
        Class<?> classPublication = validateUser.getClass();
        Field[] publicationFields =  classPublication.getDeclaredFields();
        for (Field auxField : publicationFields){
            auxField.setAccessible(true);
            try {
                if (auxField.get(validateUser) == null){
                    return false;
                }
            } catch (IllegalAccessException | IllegalArgumentException e){
                throw e;
            }
        }
        return true;
    }
    
    public User initializateUser(UserDTO userDTO) throws Exception{
        if (validateFields(userDTO)){
            User newUser = new User(
                    userDTO.getEmail(),
                    userDTO.getPassword(),
                    userDTO.getFirstname(),
                    userDTO.getLastname(),
                    userDTO.getContactNum(),
                    userDTO.getRole(),
                    userDTO.getLocation(),
                    userDTO.getCountry()
            );
            
            return newUser;
        }
        return null;
    }
}
