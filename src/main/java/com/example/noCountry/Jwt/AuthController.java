package com.example.noCountry.Jwt;

import com.example.noCountry.Entity.User;
import com.example.noCountry.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
@CrossOrigin(origins = {"http://localhost:4200/"})
@Controller
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;


  @PostMapping("login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest loginRequest) {
      return ResponseEntity.ok(authService.login(loginRequest));

  }


    @PostMapping("register")

    public ResponseEntity<AuthResponse> register(@RequestBody UserRegistrationRequest request) {
        return ResponseEntity.ok(authService.register(request));

    }
}