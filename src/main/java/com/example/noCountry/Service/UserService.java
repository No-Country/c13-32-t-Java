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

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
@RequiredArgsConstructor
public class UserService {
/*
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<User> viewAll() {
        return userRepository.findAll();
    }



   public AuthResponse createUser(UserRegistrationRequest request) {
        Role role = request.getRole();
        User user = User.builder()
        .userName(request.getUserName())
        .password(passwordEncoder.encode(request.getPassword()))
        .firstname(request.getFirstname())
        .lastname(request.getLastname())
        .contactNum(request.getContactNum())
        .role(role)
        .location(request.getLocation())
        .country(request.getCountry())
        .build();


        userRepository.save(user);

        String token = generateJwtToken(user.getUsername());

        return AuthResponse.builder()
                .token(jwtService.getToken(user))
                .build();
    }
    private String generateJwtToken(String email) {
        String secretKey = "fake";
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
        Optional<User> userOptional = userRepository.findByUserName(email);
        return userOptional.isPresent();
    }*/

}


