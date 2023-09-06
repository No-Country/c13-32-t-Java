package com.example.noCountry.DTO;

import com.example.noCountry.Entity.Location;
import com.example.noCountry.Entity.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;


public class UserDTO {
    private String email;
    private String password;
    private String firstname;
    private String lastname;
    private Integer contactNum;
    @Enumerated(EnumType.STRING)
    private Role role;
    private Location location;
    private String country;

    public UserDTO() {
    }

    public UserDTO(String email, String password, String firstname, String lastname, Integer contactNum, Role role, Location location, String country) {
        this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.contactNum = contactNum;
        this.role = role;
        this.location = location;
        this.country = country;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public Integer getContactNum() {
        return contactNum;
    }

    public void setContactNum(Integer contactNum) {
        this.contactNum = contactNum;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
    
    
}
