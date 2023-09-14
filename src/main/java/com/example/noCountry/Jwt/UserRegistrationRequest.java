package com.example.noCountry.Jwt;

import com.example.noCountry.Entity.Location;
import com.example.noCountry.Entity.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserRegistrationRequest {
    String userName;
    String password;
    String firstname;
    String lastname;
    Role role;
    Integer contactNum;
    Location location;
    String country;

}

