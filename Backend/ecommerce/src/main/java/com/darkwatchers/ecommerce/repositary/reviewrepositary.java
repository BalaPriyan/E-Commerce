package com.example.demo.repository;

import com.example.demo.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ReviewRepository extends JpaRepository<Review, UUID> {

    // Reviews given by a user
    List<Review> findByReviewerId(UUID reviewerId);

    // Reviews received by a user
    List<Review> findByRevieweeId(UUID revieweeId);
}