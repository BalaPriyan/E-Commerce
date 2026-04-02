package com.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

import com.project.entity.Organization;
import com.project.service.OrganizationService;

@RestController
@RequestMapping("/api/organizations")
@CrossOrigin("*")
public class OrganizationController {

    @Autowired
    private OrganizationService service;

    // CREATE
    @PostMapping
    public Organization create(@RequestBody Organization org) {
        return service.save(org);
    }

    // READ ALL
    @GetMapping
    public List<Organization> getAll() {
        return service.getAll();
    }

    // READ ONE
    @GetMapping("/{id}")
    public Organization getById(@PathVariable UUID id) {
        return service.getById(id);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        service.delete(id);
    }
}