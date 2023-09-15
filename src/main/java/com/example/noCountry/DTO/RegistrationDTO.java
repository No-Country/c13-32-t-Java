package com.example.noCountry.DTO;

import org.springframework.web.bind.annotation.RequestBody;


public class RegistrationDTO {
    private String username;
    private String password; 

    public RegistrationDTO() {
    }

    public RegistrationDTO(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    @Override
    public String toString(){
        return "Registration information. Username " + this.username + " password " + this.password;
    }
}
