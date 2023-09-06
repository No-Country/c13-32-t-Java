package com.example.noCountry.Controllers;

import com.example.noCountry.DTO.EmployerDTO;
import com.example.noCountry.Services.EmployerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/employer")
public class EmployerController {
    
    @Autowired
    private EmployerService employerService;
    
    // ********** POST ENDPOINTS ********** //     
    @PostMapping
    public ResponseEntity<?> createNewEmployer(@RequestBody EmployerDTO employerDTO){
        try {
            if (employerDTO == null){
                return ResponseEntity.noContent().build();
            }
            employerService.save(employerDTO);
            return new ResponseEntity("Empleador creado correctamente", HttpStatus.OK);
        } 
        catch(HttpMessageNotReadableException e) {
            return new ResponseEntity("Los datos ingresados no son validos", HttpStatus.BAD_REQUEST);
        }
        catch(Exception e){
            return new ResponseEntity("Ocurrio un error inesperado, contacte con el administrador", HttpStatus.BAD_REQUEST); 
        }
    }
}
