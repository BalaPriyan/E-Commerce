package com.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

import com.project.entity.Listing;
import com.project.repository.ListingRepository;

@Service
public class ListingService {

    @Autowired
    private ListingRepository repo;

    public Listing save(Listing listing) {
        return repo.save(listing);
    }

    public List<Listing> getAll() {
        return repo.findAll();
    }

    public Listing getById(UUID id) {
        return repo.findById(id).orElse(null);
    }

    public void delete(UUID id) {
        repo.deleteById(id);
    }

    // Filter examples
    public List<Listing> getByMaterial(String material) {
        return repo.findByMaterialType(material);
    }
}