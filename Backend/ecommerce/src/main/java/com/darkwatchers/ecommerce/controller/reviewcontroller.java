package com.example.demo.controller;

import com.example.demo.entity.Review;
import com.example.demo.service.ReviewService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/reviews")
@CrossOrigin(origins = "*") // allow React frontend
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    // Create review
    @PostMapping
    public Review createReview(@RequestBody Review review) {
        return reviewService.createReview(review);
    }

    // Get all reviews
    @GetMapping
    public List<Review> getAllReviews() {
        return reviewService.getAllReviews();
    }

    // Get reviews by reviewer
    @GetMapping("/reviewer/{reviewerId}")
    public List<Review> getByReviewer(@PathVariable UUID reviewerId) {
        return reviewService.getByReviewer(reviewerId);
    }

    // Get reviews for a user
    @GetMapping("/reviewee/{revieweeId}")
    public List<Review> getByReviewee(@PathVariable UUID revieweeId) {
        return reviewService.getByReviewee(revieweeId);
    }

    // Delete review
    @DeleteMapping("/{id}")
    public void deleteReview(@PathVariable UUID id) {
        reviewService.deleteReview(id);
    }
}