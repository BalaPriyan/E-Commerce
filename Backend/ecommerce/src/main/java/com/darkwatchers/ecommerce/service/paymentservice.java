package com.example.demo.service;

import com.example.demo.entity.Payment;
import com.example.demo.entity.PaymentStatus;
import com.example.demo.repository.PaymentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PaymentService {

    private final PaymentRepository paymentRepository;

    public PaymentService(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    // Create payment
    public Payment createPayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    // Get all payments
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    // Get by ID
    public Payment getPaymentById(UUID id) {
        return paymentRepository.findById(id).orElse(null);
    }

    // Get by order
    public List<Payment> getByOrderId(UUID orderId) {
        return paymentRepository.findByOrderId(orderId);
    }

    // Update status
    public Payment updateStatus(UUID id, String status) {
        Payment payment = paymentRepository.findById(id).orElse(null);
        if (payment != null) {
            payment.setStatus(PaymentStatus.valueOf(status));
            return paymentRepository.save(payment);
        }
        return null;
    }

    // Track by transaction ref
    public Payment getByTransactionRef(String ref) {
        return paymentRepository.findByTransactionRef(ref);
    }

    // Delete
    public void deletePayment(UUID id) {
        paymentRepository.deleteById(id);
    }
}