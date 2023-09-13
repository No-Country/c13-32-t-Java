package com.example.noCountry.controllers;

import com.example.noCountry.Entity.User;
import java.util.List;

import com.example.noCountry.Jwt.AuthResponse;
import com.example.noCountry.Jwt.UserRegistrationRequest;
import com.example.noCountry.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {


    @Autowired
    private UserService userService;


    @GetMapping()
    public ResponseEntity<?> viewAllUser() {
        List<User> responseList = userService.viewAll();
        return new ResponseEntity(responseList, HttpStatus.OK);
    }

    //add user
    @PostMapping("/create")
    public ResponseEntity<String> addUser(@RequestBody User user) {
        User createdUser = userService.createUser(user.getUsername(), user.getPassword());
        if (createdUser != null) {
            return ResponseEntity.ok("Usuario creado");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al crear el usuario");
        }

    }
}
