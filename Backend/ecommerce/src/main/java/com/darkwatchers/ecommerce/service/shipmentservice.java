package com.example.demo.service;

import com.example.demo.entity.Shipment;
import com.example.demo.entity.ShipmentStatus;
import com.example.demo.repository.ShipmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ShipmentService {

    private final ShipmentRepository shipmentRepository;

    public ShipmentService(ShipmentRepository shipmentRepository) {
        this.shipmentRepository = shipmentRepository;
    }

    // Create shipment
    public Shipment createShipment(Shipment shipment) {
        return shipmentRepository.save(shipment);
    }

    // Get all shipments
    public List<Shipment> getAllShipments() {
        return shipmentRepository.findAll();
    }

    // Get shipment by ID
    public Shipment getShipmentById(UUID id) {
        return shipmentRepository.findById(id).orElse(null);
    }

    // Get shipment by order
    public List<Shipment> getByOrderId(UUID orderId) {
        return shipmentRepository.findByOrderId(orderId);
    }

    // Track shipment
    public Shipment trackShipment(String trackingNumber) {
        return shipmentRepository.findByTrackingNumber(trackingNumber);
    }

    // Update status
    public Shipment updateStatus(UUID id, String status) {
        Shipment shipment = shipmentRepository.findById(id).orElse(null);
        if (shipment != null) {
            shipment.setStatus(ShipmentStatus.valueOf(status));
            return shipmentRepository.save(shipment);
        }
        return null;
    }

    // Delete
    public void deleteShipment(UUID id) {
        shipmentRepository.deleteById(id);
    }
}