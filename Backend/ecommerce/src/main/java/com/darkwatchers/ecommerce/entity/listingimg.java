package com.project.entity;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "listing_images")
public class ListingImage {

    @Id
    @GeneratedValue
    private UUID id;

    private String imageUrl;

    // Many images belong to one listing
    @ManyToOne
    @JoinColumn(name = "listing_id")
    private Listing listing;

    // Getters and Setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public Listing getListing() { return listing; }
    public void setListing(Listing listing) { this.listing = listing; }
}