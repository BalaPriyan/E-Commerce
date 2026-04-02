package com.example.demo.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "secure_fields")
public class SecureField {

    @Id
    @GeneratedValue
    private UUID id;

    @Column(name = "entity_type")
    private String entityType;

    @Column(name = "entity_id")
    private UUID entityId;

    @Column(name = "encrypted_data")
    private byte[] encryptedData;

    @Column(name = "encrypted_key")
    private byte[] encryptedKey;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    // Getters & Setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public String getEntityType() { return entityType; }
    public void setEntityType(String entityType) { this.entityType = entityType; }

    public UUID getEntityId() { return entityId; }
    public void setEntityId(UUID entityId) { this.entityId = entityId; }

    public byte[] getEncryptedData() { return encryptedData; }
    public void setEncryptedData(byte[] encryptedData) { this.encryptedData = encryptedData; }

    public byte[] getEncryptedKey() { return encryptedKey; }
    public void setEncryptedKey(byte[] encryptedKey) { this.encryptedKey = encryptedKey; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}