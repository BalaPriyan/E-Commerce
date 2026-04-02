package com.example.demo.repository;

import com.example.demo.entity.AuditLog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface AuditLogRepository extends JpaRepository<AuditLog, UUID> {

    List<AuditLog> findByUserId(UUID userId);

    List<AuditLog> findByEntityType(String entityType);

    List<AuditLog> findByEntityId(UUID entityId);
}