package com.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.UUID;

import com.project.entity.ListingImage;
import com.project.repository.ListingImageRepository;

@Service
public class ListingImageService {

    @Autowired
    private ListingImageRepository repo;

    public ListingImage save(ListingImage image) {
        return repo.save(image);
    }

    public List<ListingImage> getByListingId(UUID listingId) {
        return repo.findByListingId(listingId);
    }

    public void delete(UUID id) {
        repo.deleteById(id);
    }
}