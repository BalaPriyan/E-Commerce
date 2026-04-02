package com.example.demo.repository;

import com.example.demo.entity.SecureField;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface SecureFieldRepository extends JpaRepository<SecureField, UUID> {

    List<SecureField> findByEntityTypeAndEntityId(String entityType, UUID entityId);
}