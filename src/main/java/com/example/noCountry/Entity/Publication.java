package com.example.noCountry.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import java.util.UUID;

@Entity
public class Publication {
    @Id
    @GeneratedValue(generator = "uuid")
    private UUID id;
    private String name;
    private String body;
    private User owner;
    private Location location;

    public Publication() {
    }

    public Publication(UUID id, String name, String body, User owner, Location location) {
        this.id = id;
        this.name = name;
        this.body = body;
        this.owner = owner;
        this.location = location;
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

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }
}
