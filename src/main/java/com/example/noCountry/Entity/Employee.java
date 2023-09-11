package com.example.noCountry.Entity;

import jakarta.persistence.*;
import java.util.Collection;
import java.util.Date;
import java.util.UUID;
import lombok.Data;

@Entity
@Data
public class Employee extends User {

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "employee_publication",
            joinColumns = @JoinColumn(name = "employee_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "publication_id", referencedColumnName = "id")
    )
    private Collection<Publication> postulations;


    @Column(name = "date")
    private Date date;

    @Enumerated(EnumType.STRING)
    private TipoId tipoId;

    @ManyToOne // Muchos empleados pertenecen a una provincia
    @JoinColumn(name = "provincia_id")
    private Provincia provincia;

    @ManyToOne // Muchos empleados pertenecen a una ciudad
    @JoinColumn(name = "ciudad_id")
    private Ciudad ciudad;



}
