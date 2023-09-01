
package com.example.noCountry.Entity;

import jakarta.persistence.*;

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
    @GeneratedValue(generator = "id")
    @Column(name="id")
    private int id;
    @Column(name="email")
    private String email;
    @Column(name="nombre")
    private String nombre;
    @Column(name="apellido")
    private String apellido;
    @Column(name="password")
    private String password;
    @ManyToOne
    @JoinColumn(name = "rol_id")
    private Role role;
    @Column(name="activo")
    private int activo;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.getName()));
    }

    @Override
    public String getUsername() {
        return null;
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
