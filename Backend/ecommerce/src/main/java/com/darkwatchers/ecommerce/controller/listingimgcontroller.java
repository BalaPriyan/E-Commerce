package com.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

import com.project.entity.ListingImage;
import com.project.service.ListingImageService;

@RestController
@RequestMapping("/api/listing-images")
@CrossOrigin("*")
public class ListingImageController {

    @Autowired
    private ListingImageService service;

    // Upload image URL
    @PostMapping
    public ListingImage addImage(@RequestBody ListingImage image) {
        return service.save(image);
    }

    // Get images by listing
    @GetMapping("/{listingId}")
    public List<ListingImage> getImages(@PathVariable UUID listingId) {
        return service.getByListingId(listingId);
    }

    // Delete image
    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        service.delete(id);
    }
}