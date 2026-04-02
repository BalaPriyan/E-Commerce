package com.example.demo.repository;

import com.example.demo.entity.Shipment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ShipmentRepository extends JpaRepository<Shipment, UUID> {

    List<Shipment> findByOrderId(UUID orderId);

    Shipment findByTrackingNumber(String trackingNumber);
}