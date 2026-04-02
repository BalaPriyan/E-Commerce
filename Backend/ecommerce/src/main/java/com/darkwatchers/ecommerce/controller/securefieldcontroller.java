package com.example.demo.controller;

import com.example.demo.entity.SecureField;
import com.example.demo.service.SecureFieldService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/secure-fields")
@CrossOrigin(origins = "*")
public class SecureFieldController {

    private final SecureFieldService service;

    public SecureFieldController(SecureFieldService service) {
        this.service = service;
    }

    // Save encrypted data
    @PostMapping
    public SecureField saveData(
            @RequestParam String entityType,
            @RequestParam UUID entityId,
            @RequestParam String data
    ) {
        return service.saveSecureData(entityType, entityId, data);
    }

    // Get decrypted data
    @GetMapping("/{id}")
    public String getDecrypted(@PathVariable UUID id) {
        return service.getDecryptedData(id);
    }

    // Get by entity
    @GetMapping
    public List<SecureField> getByEntity(
            @RequestParam String entityType,
            @RequestParam UUID entityId
    ) {
        return service.getByEntity(entityType, entityId);
    }

    // Delete
    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        service.delete(id);
    }
}