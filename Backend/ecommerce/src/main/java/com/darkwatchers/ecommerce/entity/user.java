package com.project.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue
    private UUID id;

    private String name;

    @Column(unique = true, nullable = false)
    private String email;

    private String passwordHash;

    private String role; // or Enum (recommended)

    private Boolean isActive;

    @ManyToOne
    @JoinColumn(name = "organization_id")
    private Organization organization;

    private LocalDateTime createdAt;

    @PrePersist
    public void setDefaults() {
        this.createdAt = LocalDateTime.now();
        if (this.isActive == null) {
            this.isActive = true;
        }
    }

    // Getters and Setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPasswordHash() { return passwordHash; }
    public void setPasswordHash(String passwordHash) { this.passwordHash = passwordHash; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public Boolean getIsActive() { return isActive; }
    public void setIsActive(Boolean isActive) { this.isActive = isActive; }

    public Organization getOrganization() { return organization; }
    public void setOrganization(Organization organization) { this.organization = organization; }

    public LocalDateTime getCreatedAt() { return createdAt; }
}