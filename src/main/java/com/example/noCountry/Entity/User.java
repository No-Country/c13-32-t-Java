
package com.example.noCountry.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import java.util.Collection;
import java.util.List;
import java.util.UUID;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import lombok.Data;
@Entity
@Data
public class User implements UserDetails {
    @Id
    @GeneratedValue(generator = "uuid")
    private UUID id;
    @Column(nullable = false, unique = true)
    private String email;
    private String password;
    private String firstname;
    private String lastname;
    private Integer contactNum;
    @Enumerated(EnumType.STRING)
    private Role role;
    private Location location;
    private String country; 

    public User() {
    }

    public User(UUID id, String email, String password, String firstname, String lastname, Integer contactNum, Role role, Location location, String country) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.contactNum = contactNum;
        this.role = role;
        this.location = location;
        this.country = country;
    }

    public User(String email, String password, String firstname, String lastname, Integer contactNum, Role role, Location location, String country) {
        this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.contactNum = contactNum;
        this.role = role;
        this.location = location;
        this.country = country;
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
    
    public Integer getContactNum() {
        return contactNum;
    }

    public void setContactNum(Integer contactNum) {
        this.contactNum = contactNum;
    }
    
    public String getFirstname(){
        return firstname;
    }
    
    public void setFirstname(String firstname){
        this.firstname = firstname;
    }
    
    public String getLastname(){
        return lastname;
    }
    
    public void setLastname(String lastname){
        this.lastname = lastname;
    }
    
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    @Override
    public String getUsername() {
        return email;
    }

    public void setUsername(String email) {
        this.email = email;
    }
    
    @Override
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
