package com.example.noCountry.Service;
import com.example.noCountry.Entity.Location;
import com.example.noCountry.Entity.User;
import com.example.noCountry.Entity.Role;
import com.example.noCountry.Jwt.AuthResponse;
import com.example.noCountry.Jwt.JwtService;
import com.example.noCountry.Jwt.UserRegistrationRequest;
import com.example.noCountry.Repository.UserRepository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
@RequiredArgsConstructor
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<User> viewAll(){
        return userRepository.findAll();
    }

    public User createUser(String userName, String password) {
        User user = new User();
        user.setuserName(userName);
        user.setPassword(passwordEncoder.encode(password));


        return userRepository.save(user);
    }

    public User findByUserName(String username) {
        Optional<User> encontrarUser = userRepository.findByUserName(username);
        if (encontrarUser.isEmpty()) {
            throw new RuntimeException("No se encontró usuario con ese correo registrado, intente nuevamente");
        }
        return encontrarUser.get();
    }
}


