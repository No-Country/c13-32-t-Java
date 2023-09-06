package com.example.noCountry.DTO;

import com.example.noCountry.Entity.Ciudad;
import com.example.noCountry.Entity.Provincia;
import com.example.noCountry.Entity.TipoId;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
public class EmployeeDTO {

    private String nameEmployee;

    private String lastNameEmployee;

    private Provincia provincia;

    private Ciudad ciudad;

    private String phone;
}
