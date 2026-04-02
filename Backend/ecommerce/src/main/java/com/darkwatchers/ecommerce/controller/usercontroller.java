package com.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

import com.project.entity.User;
import com.project.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService service;

    // CREATE
    @PostMapping
    public User create(@RequestBody User user) {
        return service.save(user);
    }

    // READ ALL
    @GetMapping
    public List<User> getAll() {
        return service.getAll();
    }

    // READ ONE
    @GetMapping("/{id}")
    public User getById(@PathVariable UUID id) {
        return service.getById(id);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        service.delete(id);
    }
}