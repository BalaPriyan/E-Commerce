package com.example.demo.controller;

import com.example.demo.entity.Payment;
import com.example.demo.service.PaymentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/payments")
@CrossOrigin(origins = "*") // React access
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    // Create payment
    @PostMapping
    public Payment createPayment(@RequestBody Payment payment) {
        return paymentService.createPayment(payment);
    }

    // Get all
    @GetMapping
    public List<Payment> getAllPayments() {
        return paymentService.getAllPayments();
    }

    // Get by ID
    @GetMapping("/{id}")
    public Payment getPayment(@PathVariable UUID id) {
        return paymentService.getPaymentById(id);
    }

    // Get by order
    @GetMapping("/order/{orderId}")
    public List<Payment> getByOrder(@PathVariable UUID orderId) {
        return paymentService.getByOrderId(orderId);
    }

    // Track by transaction ref
    @GetMapping("/track/{ref}")
    public Payment getByTransaction(@PathVariable String ref) {
        return paymentService.getByTransactionRef(ref);
    }

    // Update status
    @PutMapping("/{id}/status")
    public Payment updateStatus(@PathVariable UUID id, @RequestParam String status) {
        return paymentService.updateStatus(id, status);
    }

    // Delete
    @DeleteMapping("/{id}")
    public void deletePayment(@PathVariable UUID id) {
        paymentService.deletePayment(id);
    }
}