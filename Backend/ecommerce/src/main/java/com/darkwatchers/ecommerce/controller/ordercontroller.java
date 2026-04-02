package com.example.demo.controller;

import com.example.demo.entity.Order;
import com.example.demo.service.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*") // allow React frontend
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    // Create Order
    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        return orderService.createOrder(order);
    }

    // Get All Orders
    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    // Get Order by ID
    @GetMapping("/{id}")
    public Order getOrderById(@PathVariable UUID id) {
        return orderService.getOrderById(id);
    }

    // Get Orders by Buyer
    @GetMapping("/buyer/{buyerId}")
    public List<Order> getOrdersByBuyer(@PathVariable UUID buyerId) {
        return orderService.getOrdersByBuyer(buyerId);
    }

    // Update Status
    @PutMapping("/{id}/status")
    public Order updateStatus(@PathVariable UUID id, @RequestParam String status) {
        return orderService.updateOrderStatus(id, status);
    }

    // Delete Order
    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable UUID id) {
        orderService.deleteOrder(id);
    }
}