package com.example.demo.service;

import com.example.demo.entity.Order;
import com.example.demo.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order getOrderById(UUID id) {
        return orderRepository.findById(id).orElse(null);
    }

    public List<Order> getOrdersByBuyer(UUID buyerId) {
        return orderRepository.findByBuyerId(buyerId);
    }

    public Order updateOrderStatus(UUID id, String status) {
        Order order = orderRepository.findById(id).orElse(null);
        if (order != null) {
            order.setStatus(Enum.valueOf(com.example.demo.entity.OrderStatus.class, status));
            return orderRepository.save(order);
        }
        return null;
    }

    public void deleteOrder(UUID id) {
        orderRepository.deleteById(id);
    }
}