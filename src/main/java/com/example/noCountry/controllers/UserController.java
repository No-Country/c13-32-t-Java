package com.example.noCountry.controllers;

import com.example.noCountry.DTO.UserDTO;
import com.example.noCountry.Entity.User;
import com.example.noCountry.Services.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
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
    public ResponseEntity<?> viewAllUser(){
        List<User> responseList = userService.viewAll();
        return new ResponseEntity(responseList, HttpStatus.OK);
    }
    
    //add user
    @PostMapping("/create")
    public ResponseEntity<String> addUser(@RequestBody UserDTO user){
        try {
            if (userService.createUser(user)) {
                return ResponseEntity.ok("Usuario creado");
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al crear el usuario");
            }
        } catch (Exception e){
            return new ResponseEntity("Ocurrio un error inesperado, contacte con el administrador", HttpStatus.BAD_REQUEST);
        }
        
    }





}
