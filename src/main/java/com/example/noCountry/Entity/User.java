package com.example.noCountry.Entity;

import jakarta.persistence.*;

import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Builder;
import org.springframework.security.core.GrantedAuthority;
import lombok.Data;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Data
@Builder
@AllArgsConstructor
//@Table(name = "user", uniqueConstraints = {@UniqueConstraint(columnNames = {"userName"})})
public class User implements UserDetails {
    @Id
    @GeneratedValue(generator = "uuid")
    private UUID id;
    @Column
    private String userName;

    private String password;
    private String firstname;
    private String lastname;

    @Column(name = "date")
    private Date date;

    @Enumerated(EnumType.STRING)
    private TipoId tipoId;

    private Integer contactNum;

    @Enumerated(EnumType.STRING)
    private Role role;
    private Location location;
    private String country;

    public User() {
    }

    public User(UUID id, String userName, String password, String firstname, String lastname, Integer contactNum, Role role, Location location, String country, Date date) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.contactNum = contactNum;
        this.role = role;
        this.location = location;
        this.country = country;
        this.date = date;
    }

    public User(String userName, String password, String firstname, String lastname, Integer contactNum, Role role, Location location, String country, Date date) {
        this.userName = userName;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.contactNum = contactNum;
        this.role = role;
        this.location = location;
        this.country = country;
        this.date = date;
    }

    //construtor para employeer
    public User(String userName, String password, String firstname, String lastname, Integer contactNum, Role role, Location location, String country) {
        this.userName = userName;
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


    public void setuserName(String userName) {
        this.userName = userName;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return null;
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
