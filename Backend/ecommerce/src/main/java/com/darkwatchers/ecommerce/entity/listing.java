package com.project.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "listings")
public class Listing {

    @Id
    @GeneratedValue
    private UUID id;

    private String materialType;
    private String wasteType;

    private Double quantityKg;
    private Double pricePerKg;

    private String location;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String status;

    // 🔗 Seller (User)
    @ManyToOne
    @JoinColumn(name = "seller_id")
    private User seller;

    // 🔗 Organization
    @ManyToOne
    @JoinColumn(name = "organization_id")
    private Organization organization;

    private LocalDateTime createdAt;

    @PrePersist
    public void setDefaults() {
        this.createdAt = LocalDateTime.now();
        if (this.status == null) {
            this.status = "ACTIVE";
        }
    }

    // Getters and Setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public String getMaterialType() { return materialType; }
    public void setMaterialType(String materialType) { this.materialType = materialType; }

    public String getWasteType() { return wasteType; }
    public void setWasteType(String wasteType) { this.wasteType = wasteType; }

    public Double getQuantityKg() { return quantityKg; }
    public void setQuantityKg(Double quantityKg) { this.quantityKg = quantityKg; }

    public Double getPricePerKg() { return pricePerKg; }
    public void setPricePerKg(Double pricePerKg) { this.pricePerKg = pricePerKg; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public User getSeller() { return seller; }
    public void setSeller(User seller) { this.seller = seller; }

    public Organization getOrganization() { return organization; }
    public void setOrganization(Organization organization) { this.organization = organization; }

    public LocalDateTime getCreatedAt() { return createdAt; }
}