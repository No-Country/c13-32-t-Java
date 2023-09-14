package com.example.noCountry.Config;


import com.example.noCountry.Jwt.JwtAuthFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{

        http.csrf(
                (csrf) -> csrf
                        .disable()
        );

        http.authorizeHttpRequests(
                (authz) -> authz
                        .anyRequest().permitAll()
        );

        return http.build();
    }
   /* @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(authRequest ->
                        authRequest
                                .requestMatchers("/auth/**").permitAll()
                                .anyRequest().authenticated()
                )
                .sessionManagement(sessionManager ->
                        sessionManager
                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter,  UsernamePasswordAuthenticationFilter.class)
                .build();
        }*/

}

   /*

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("usuario") // Nombre de usuario
                .password("contraseña")
                .roles("USER");
    }

    @Configuration
    public static class FormLoginWebSecurityConfigurerAdapter extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {

        @Override
        public void configure(HttpSecurity http) throws Exception {
            http
                    .authorizeRequests()
                    .antMatchers("/user/auth/login").permitAll()
                    .antMatchers("/user/auth/register").permitAll()
                    .anyRequest().authenticated()
                    .and()
                    .formLogin()
                    .loginPage("/user/auth/login") // Página de inicio de sesión personalizada
                    .permitAll() // Permitir acceso a la página de inicio de sesión
                    .and()
                    .logout()
                    .logoutUrl("/user/auth/logout") // URL de cierre de sesión personalizada
                    .permitAll(); // Permitir acceso a la página de cierre de sesión
        }
    }*/
