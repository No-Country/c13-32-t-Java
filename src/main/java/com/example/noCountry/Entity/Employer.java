package com.example.noCountry.Entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import lombok.Data;

import java.util.Collection;
import java.util.UUID;

@Entity
@Data
public class Employer extends User{
    @Id
    @GeneratedValue(generator = "uuid")
    private UUID id;
    
    private String enterpriseName;

    private String userName;
    private FiscalCondition fiscalCondition;
    private Long cuit;
    private String taxResidence;
    private Industry industryType;
    private Boolean isVerified;
    
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "employer_publication",
            joinColumns = @JoinColumn(name = "employer_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "publication_id", referencedColumnName = "id")
    )
    private Collection<Publication> myPublication;

    public Employer() {
    }

    public Employer(String userName, String password, String firstname,
                    String lastname, Integer contactNum, Role role, Location location,
                    String country) {
        super(userName, password, firstname, lastname, contactNum, role, location, country);
    }
    public Employer(String enterpriseName, FiscalCondition fiscalCondition,
            Long cuit, String taxResidence, Industry industryType, Boolean isVerified,
            Collection<Publication> myPublication) {
        this.enterpriseName = enterpriseName;
        this.fiscalCondition = fiscalCondition;
        this.cuit = cuit;
        this.taxResidence = taxResidence;
        this.industryType = industryType;
        this.isVerified = isVerified;
        this.myPublication = myPublication;
    }

    public Employer(String enterpriseName, FiscalCondition fiscalCondition, Long cuit,
            String taxResidence, Industry industryType, Boolean isVerified, Collection<Publication> myPublication,
            String userName, String password, String firstname, String lastname, Integer contactNum,
            Role role, Location location, String country) {
        super(userName, password, firstname, lastname, contactNum, role, location, country);
        this.enterpriseName = enterpriseName;
        this.fiscalCondition = fiscalCondition;
        this.cuit = cuit;
        this.taxResidence = taxResidence;
        this.industryType = industryType;
        this.isVerified = isVerified;
        this.myPublication = myPublication;
    }
    
    
    public Boolean getIsVerified() {
        return isVerified;
    }

    public void setIsVerified(Boolean isVerified) {
        this.isVerified = isVerified;
    }

    public Collection<Publication> getMyPublication() {
        return myPublication;
    }

    public void setMyPublication(Collection<Publication> myPublication) {
        this.myPublication = myPublication;
    }
    
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getEnterpriseName() {
        return enterpriseName;
    }

    public void setEnterpriseName(String enterpriseName) {
        this.enterpriseName = enterpriseName;
    }

    public FiscalCondition getFiscalCondition() {
        return fiscalCondition;
    }

    public void setFiscalCondition(FiscalCondition fiscalCondition) {
        this.fiscalCondition = fiscalCondition;
    }

    public Long getCuit() {
        return cuit;
    }

    public void setCuit(Long cuit) {
        this.cuit = cuit;
    }

    public String getTaxResidence() {
        return taxResidence;
    }

    public void setTaxResidence(String taxResidence) {
        this.taxResidence = taxResidence;
    }

    public Industry getIndustryType() {
        return industryType;
    }

    public void setIndustryType(Industry industryType) {
        this.industryType = industryType;
    }
}
