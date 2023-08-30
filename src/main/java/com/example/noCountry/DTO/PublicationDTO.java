package com.example.noCountry.DTO;

import com.example.noCountry.Entity.Location;
import com.example.noCountry.Entity.User;

public class PublicationDTO {
    private String name;
    private String body;
    private User owner;
    private String keywords;
    private Location location;

    public PublicationDTO() {
    }

    public PublicationDTO(String name, String body, User owner, String keywords, Location location) {  
        this.name = name;
        this.body = body;
        this.owner = owner;
        this.keywords = keywords;
        this.location = location;
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

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }
}