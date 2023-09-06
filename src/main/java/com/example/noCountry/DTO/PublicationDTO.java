package com.example.noCountry.DTO;

import com.example.noCountry.Entity.Employer;
import com.example.noCountry.Entity.Industry;
import com.example.noCountry.Entity.Location;
import com.example.noCountry.Entity.User;
import org.antlr.v4.runtime.misc.NotNull;

public class PublicationDTO {
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

    public PublicationDTO() {
    }

    public PublicationDTO(String name, String body, Employer owner, String keywords, Location location,
            Integer schedule, Integer vacancies, Industry industry, String contractType,
            String modalityWork, Float salary, String city, String seniority,
            String description, String chores, String requirements, String benefit) {
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

    public Integer getSchedule() {
        return schedule;
    }

    public void setSchedule(Integer schedule) {
        this.schedule = schedule;
    }

    public Integer getVacancies() {
        return vacancies;
    }

    public void setVacancies(Integer vacancies) {
        this.vacancies = vacancies;
    }

    public Industry getIndustry() {
        return industry;
    }

    public void setIndustry(Industry industry) {
        this.industry = industry;
    }

    public String getContractType() {
        return contractType;
    }

    public void setContractType(String contractType) {
        this.contractType = contractType;
    }

    public String getModalityWork() {
        return modalityWork;
    }

    public void setModalityWork(String modalityWork) {
        this.modalityWork = modalityWork;
    }

    public Float getSalary() {
        return salary;
    }

    public void setSalary(Float salary) {
        this.salary = salary;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getSeniority() {
        return seniority;
    }

    public void setSeniority(String seniority) {
        this.seniority = seniority;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getChores() {
        return chores;
    }

    public void setChores(String chores) {
        this.chores = chores;
    }

    public String getRequirements() {
        return requirements;
    }

    public void setRequirements(String requirements) {
        this.requirements = requirements;
    }

    public String getBenefit() {
        return benefit;
    }

    public void setBenefit(String benefit) {
        this.benefit = benefit;
    }
    
    
}