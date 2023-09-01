package com.example.noCountry.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Empleador")
public class Employer extends User{

    @Column(name="nombreOrg")
    private String nombreOrg;
    @Column(name="condFiscal")
    private String condFiscal;
    @Column(name="cuit")
    private String cuit;
    @Column(name="domiFiscal")
    private String domiFiscal;

    @ManyToOne
    @Column(name="provincia")
    private Provincia provincia;

    @ManyToOne
    @Column(name="ciudad")
    private Location ciudad;
    @Column(name="telefono")
    private String telefono;
    @Column(name="usoServicioCondLegales")
    private String usoServicioCondLegales;
    @Column(name="envioEmails")
    private String envioEmails;
    private String image;


}
