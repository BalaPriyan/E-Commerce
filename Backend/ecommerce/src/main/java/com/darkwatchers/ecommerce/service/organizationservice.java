package com.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.UUID;

import com.project.entity.Organization;
import com.project.repository.OrganizationRepository;

@Service
public class OrganizationService {

    @Autowired
    private OrganizationRepository repo;

    public Organization save(Organization org) {
        return repo.save(org);
    }

    public List<Organization> getAll() {
        return repo.findAll();
    }

    public Organization getById(UUID id) {
        return repo.findById(id).orElse(null);
    }

    public void delete(UUID id) {
        repo.deleteById(id);
    }
}