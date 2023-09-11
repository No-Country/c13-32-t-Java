package com.example.noCountry.controllers;

import com.example.noCountry.Entity.User;
import com.example.noCountry.Jwt.AuthResponse;
import com.example.noCountry.Jwt.LoginRequest;
import com.example.noCountry.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class AuthController {


    @Autowired
    private UserService userService;


    @PostMapping("/auth/login")
    public ResponseEntity<AuthResponse> login(@RequestBody User user) {

        if (userService.emailExists(user.getEmail())) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new AuthResponse("Error: El correo electrónico ya está en uso."));
        }
        String tokenFake = "fake";
        AuthResponse authResponse = new AuthResponse(tokenFake);
        return ResponseEntity.ok(authResponse);
    }

    @PostMapping("/auth/register")
    public ResponseEntity<AuthResponse> registerUser(@RequestBody User user) {

        if (userService.emailExists(user.getEmail())) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new AuthResponse("Error: El correo electrónico ya está en uso."));
        }

        AuthResponse authResponse = userService.createUser(user.getEmail(), user.getPassword(), user.getRole());
        return ResponseEntity.ok(authResponse);
    }

}