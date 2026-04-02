package com.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

import com.project.entity.User;
import com.project.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public User save(User user) {
        return repo.save(user);
    }

    public List<User> getAll() {
        return repo.findAll();
    }

    public User getById(UUID id) {
        return repo.findById(id).orElse(null);
    }

    public void delete(UUID id) {
        repo.deleteById(id);
    }
}