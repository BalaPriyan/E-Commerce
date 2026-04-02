package com.example.demo.service;

import com.example.demo.entity.AuditLog;
import com.example.demo.repository.AuditLogRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class AuditLogService {

    private final AuditLogRepository auditLogRepository;

    public AuditLogService(AuditLogRepository auditLogRepository) {
        this.auditLogRepository = auditLogRepository;
    }

    // Save log
    public AuditLog saveLog(AuditLog log) {
        return auditLogRepository.save(log);
    }

    // Get all logs
    public List<AuditLog> getAllLogs() {
        return auditLogRepository.findAll();
    }

    // Get logs by user
    public List<AuditLog> getLogsByUser(UUID userId) {
        return auditLogRepository.findByUserId(userId);
    }

    // Get logs by entity type
    public List<AuditLog> getLogsByEntityType(String type) {
        return auditLogRepository.findByEntityType(type);
    }

    // Delete log
    public void deleteLog(UUID id) {
        auditLogRepository.deleteById(id);
    }
}