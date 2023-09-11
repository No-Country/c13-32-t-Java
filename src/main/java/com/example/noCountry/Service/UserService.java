package com.example.noCountry.Service;

import com.example.noCountry.Entity.User;
import com.example.noCountry.Entity.Role;
import com.example.noCountry.Jwt.AuthResponse;
import com.example.noCountry.Repository.UserRepository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<User> viewAll() {
        return userRepository.findAll();
    }

    public AuthResponse createUser(String email, String password, Role role) {
        User user = new User();
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));
        user.setRole(role);

        userRepository.save(user);

        String token = generateJwtToken(user.getEmail());

        return AuthResponse.builder()
                .token(token)
                .build();
    }
    private String generateJwtToken(String email) {
        String secretKey = "TuClaveSecreta";
        long expirationTimeMillis = 3600000; // 1 hora

        Date now = new Date();
        Date expirationDate = new Date(now.getTime() + expirationTimeMillis);

        String token = Jwts.builder()
                .setSubject(email)
                .setIssuedAt(now)
                .setExpiration(expirationDate)
                .signWith(SignatureAlgorithm.HS512, secretKey)
                .compact();

        return token;
    }
    public boolean emailExists(String email) {
        Optional<User> userOptional = Optional.ofNullable(userRepository.findByEmail(email));
        return userOptional.isPresent();
    }

}


