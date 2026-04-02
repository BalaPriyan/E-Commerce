package com.example.demo.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "reviews")
public class Review {

    @Id
    @GeneratedValue
    private UUID id;

    @Column(name = "reviewer_id")
    private UUID reviewerId;

    @Column(name = "reviewee_id")
    private UUID revieweeId;

    @Column(nullable = false)
    private int rating; // 1 to 5

    @Column(columnDefinition = "TEXT")
    private String comment;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    // Getters & Setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public UUID getReviewerId() { return reviewerId; }
    public void setReviewerId(UUID reviewerId) { this.reviewerId = reviewerId; }

    public UUID getRevieweeId() { return revieweeId; }
    public void setRevieweeId(UUID revieweeId) { this.revieweeId = revieweeId; }

    public int getRating() { return rating; }
    public void setRating(int rating) { this.rating = rating; }

    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}