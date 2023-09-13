package com.example.noCountry.Service;

import com.example.noCountry.Entity.User;
import com.example.noCountry.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserSecurity  implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> userOptional = userRepository.findByUserName(username);

        if (userOptional.isEmpty()) {
            throw new UsernameNotFoundException("Usuario no encontrado: " + username);
        }

        User user = userOptional.get(); // Obtiene el usuario del Optional

        return user;
    }

}
