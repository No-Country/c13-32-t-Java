package com.example.noCountry;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class NoCountryApplication {

	public static void main(String[] args) {
		SpringApplication.run(NoCountryApplication.class, args);
	}
        
        @Bean
        public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
                                        .allowedOrigins("http://localhost:4200")
                                        .allowedHeaders("*")
                                        .allowedMethods("GET", "POST", "PUT", "DELETE");
			}
		};
	}

	@Bean
	public PasswordEncoder myPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
