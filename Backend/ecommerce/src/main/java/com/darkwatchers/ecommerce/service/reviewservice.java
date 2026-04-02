package com.example.demo.service;

import com.example.demo.entity.Review;
import com.example.demo.repository.ReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    // Create review
    public Review createReview(Review review) {
        if (review.getRating() < 1 || review.getRating() > 5) {
            throw new IllegalArgumentException("Rating must be between 1 and 5");
        }
        return reviewRepository.save(review);
    }

    // Get all reviews
    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    // Get reviews by reviewer
    public List<Review> getByReviewer(UUID reviewerId) {
        return reviewRepository.findByReviewerId(reviewerId);
    }

    // Get reviews for a user
    public List<Review> getByReviewee(UUID revieweeId) {
        return reviewRepository.findByRevieweeId(revieweeId);
    }

    // Delete review
    public void deleteReview(UUID id) {
        reviewRepository.deleteById(id);
    }
}