package com.example.noCountry.Jwt;

import com.example.noCountry.Entity.Role;
import com.example.noCountry.Entity.User;
import com.example.noCountry.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthResponse register(UserRegistrationRequest request) {
        User user = User.builder()
                .userName(request.getUserName())
                .password(passwordEncoder.encode(request.getPassword()))
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .contactNum(request.getContactNum())
                .role(Role.WORKER)
                .location(request.getLocation())
                .country(request.getCountry())
                .build();


        userRepository.save(user);

       /* String token = generateJwtToken(user.getUsername());*/

        return AuthResponse.builder()
                .token(jwtService.getToken(user))
                .build();
    }

    public AuthResponse login(LoginRequest loginRequest) {

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.username, loginRequest.Password));
        String username = loginRequest.getUsername();
        UserDetails user = userRepository.findByUserName(username)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado: " + username));

        String token = jwtService.getToken(user);
        return AuthResponse.builder()
                .token(token)
                .build();
        }

}
