package com.example.demo.service;

import com.example.demo.entity.SecureField;
import com.example.demo.repository.SecureFieldRepository;
import com.example.demo.util.EncryptionUtil;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.List;
import java.util.UUID;

@Service
public class SecureFieldService {

    private final SecureFieldRepository repository;

    public SecureFieldService(SecureFieldRepository repository) {
        this.repository = repository;
    }

    // Save encrypted data
    public SecureField saveSecureData(String entityType, UUID entityId, String plainData) {
        try {
            SecretKey key = EncryptionUtil.generateKey();

            byte[] encryptedData = EncryptionUtil.encrypt(plainData, key);
            byte[] keyBytes = EncryptionUtil.getKeyBytes(key);

            SecureField field = new SecureField();
            field.setEntityType(entityType);
            field.setEntityId(entityId);
            field.setEncryptedData(encryptedData);
            field.setEncryptedKey(keyBytes);

            return repository.save(field);

        } catch (Exception e) {
            throw new RuntimeException("Encryption failed");
        }
    }

    // Get & decrypt data
    public String getDecryptedData(UUID id) {
        try {
            SecureField field = repository.findById(id).orElse(null);
            if (field == null) return null;

            return EncryptionUtil.decrypt(
                    field.getEncryptedData(),
                    field.getEncryptedKey()
            );

        } catch (Exception e) {
            throw new RuntimeException("Decryption failed");
        }
    }

    // Get by entity
    public List<SecureField> getByEntity(String entityType, UUID entityId) {
        return repository.findByEntityTypeAndEntityId(entityType, entityId);
    }

    // Delete
    public void delete(UUID id) {
        repository.deleteById(id);
    }
}