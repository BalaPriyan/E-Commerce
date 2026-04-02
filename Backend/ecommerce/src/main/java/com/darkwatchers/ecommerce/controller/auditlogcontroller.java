package com.example.demo.controller;

import com.example.demo.entity.AuditLog;
import com.example.demo.service.AuditLogService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/audit-logs")
@CrossOrigin(origins = "*") // React frontend
public class AuditLogController {

    private final AuditLogService auditLogService;

    public AuditLogController(AuditLogService auditLogService) {
        this.auditLogService = auditLogService;
    }

    // Create log
    @PostMapping
    public AuditLog createLog(@RequestBody AuditLog log) {
        return auditLogService.saveLog(log);
    }

    // Get all logs
    @GetMapping
    public List<AuditLog> getAllLogs() {
        return auditLogService.getAllLogs();
    }

    // Get logs by user
    @GetMapping("/user/{userId}")
    public List<AuditLog> getByUser(@PathVariable UUID userId) {
        return auditLogService.getLogsByUser(userId);
    }

    // Get logs by entity type
    @GetMapping("/entity/{type}")
    public List<AuditLog> getByEntityType(@PathVariable String type) {
        return auditLogService.getLogsByEntityType(type);
    }

    // Delete log
    @DeleteMapping("/{id}")
    public void deleteLog(@PathVariable UUID id) {
        auditLogService.deleteLog(id);
    }
}