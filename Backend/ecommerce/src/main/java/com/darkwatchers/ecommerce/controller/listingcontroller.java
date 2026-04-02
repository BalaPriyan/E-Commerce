package com.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

import com.project.entity.Listing;
import com.project.service.ListingService;

@RestController
@RequestMapping("/api/listings")
@CrossOrigin("*")
public class ListingController {

    @Autowired
    private ListingService service;

    // CREATE
    @PostMapping
    public Listing create(@RequestBody Listing listing) {
        return service.save(listing);
    }

    // READ ALL
    @GetMapping
    public List<Listing> getAll() {
        return service.getAll();
    }

    // READ ONE
    @GetMapping("/{id}")
    public Listing getById(@PathVariable UUID id) {
        return service.getById(id);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        service.delete(id);
    }

    // FILTER
    @GetMapping("/material/{type}")
    public List<Listing> getByMaterial(@PathVariable String type) {
        return service.getByMaterial(type);
    }
}