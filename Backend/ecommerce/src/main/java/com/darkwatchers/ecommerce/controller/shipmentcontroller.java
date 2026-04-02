package com.example.demo.controller;

import com.example.demo.entity.Shipment;
import com.example.demo.service.ShipmentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/shipments")
@CrossOrigin(origins = "*") // allow React frontend
public class ShipmentController {

    private final ShipmentService shipmentService;

    public ShipmentController(ShipmentService shipmentService) {
        this.shipmentService = shipmentService;
    }

    // Create shipment
    @PostMapping
    public Shipment createShipment(@RequestBody Shipment shipment) {
        return shipmentService.createShipment(shipment);
    }

    // Get all shipments
    @GetMapping
    public List<Shipment> getAllShipments() {
        return shipmentService.getAllShipments();
    }

    // Get shipment by ID
    @GetMapping("/{id}")
    public Shipment getShipment(@PathVariable UUID id) {
        return shipmentService.getShipmentById(id);
    }

    // Get by order
    @GetMapping("/order/{orderId}")
    public List<Shipment> getByOrder(@PathVariable UUID orderId) {
        return shipmentService.getByOrderId(orderId);
    }

    // Track shipment
    @GetMapping("/track/{trackingNumber}")
    public Shipment trackShipment(@PathVariable String trackingNumber) {
        return shipmentService.trackShipment(trackingNumber);
    }

    // Update status
    @PutMapping("/{id}/status")
    public Shipment updateStatus(@PathVariable UUID id, @RequestParam String status) {
        return shipmentService.updateStatus(id, status);
    }

    // Delete shipment
    @DeleteMapping("/{id}")
    public void deleteShipment(@PathVariable UUID id) {
        shipmentService.deleteShipment(id);
    }
}