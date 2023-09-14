package com.example.noCountry.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import java.util.UUID;
import org.antlr.v4.runtime.misc.NotNull;

@Entity
public class Publication {
    @Id
    @GeneratedValue(generator = "uuid")
    private UUID id;
    @NotNull
    private String name;
    @NotNull
    private String body;
    @NotNull
    private Employer owner;
    @NotNull
    private String keywords;
    @NotNull
    private Location location;
    @NotNull
    private Integer schedule;
    @NotNull
    private Integer vacancies;
    @NotNull
    private Industry industry;
    @NotNull
    private String contractType;
    @NotNull
    private String modalityWork;
    @NotNull
    private Float salary;
    @NotNull
    private String city;
    @NotNull
    private String seniority;
    private String description;
    private String chores;
    private String requirements;
    private String benefit;
    

    public Publication() {
    }

    public Publication(UUID id, String name, String body, Employer owner,
            String keywords, Location location, Integer schedule, Integer vacancies,
            Industry industry, String contractType, String modalityWork, Float salary,
            String city, String seniority, String description, String chores, String requirements, String benefit) {
        this.id = id;
        this.name = name;
        this.body = body;
        this.owner = owner;
        this.keywords = keywords;
        this.location = location;
        this.schedule = schedule;
        this.vacancies = vacancies;
        this.industry = industry;
        this.contractType = contractType;
        this.modalityWork = modalityWork;
        this.salary = salary;
        this.city = city;
        this.seniority = seniority;
        this.description = description;
        this.chores = chores;
        this.requirements = requirements;
        this.benefit = benefit;
    }

    public Publication(String name, String body, Employer owner, String keywords, Location location,
            Integer schedule, Integer vacancies, Industry industry, String contractType, String modalityWork,
            Float salary, String city, String seniority, String description, String chores, String requirements,
            String benefit) {
        this.name = name;
        this.body = body;
        this.owner = owner;
        this.keywords = keywords;
        this.location = location;
        this.schedule = schedule;
        this.vacancies = vacancies;
        this.industry = industry;
        this.contractType = contractType;
        this.modalityWork = modalityWork;
        this.salary = salary;
        this.city = city;
        this.seniority = seniority;
        this.description = description;
        this.chores = chores;
        this.requirements = requirements;
        this.benefit = benefit;
    }
    
    
    
    public String getKeywords() {
        return keywords;
    }

    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }
    
    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Employer getOwner() {
        return owner;
    }

    public void setOwner(Employer owner) {
        this.owner = owner;
    }
}
