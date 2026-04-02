package com.example.demo.controller;

import com.example.demo.entity.Message;
import com.example.demo.service.MessageService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins = "*") // allow React frontend
public class MessageController {

    private final MessageService messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    // Send message
    @PostMapping
    public Message sendMessage(@RequestBody Message message) {
        return messageService.sendMessage(message);
    }

    // Get all messages
    @GetMapping
    public List<Message> getAllMessages() {
        return messageService.getAllMessages();
    }

    // Get messages by listing
    @GetMapping("/listing/{listingId}")
    public List<Message> getMessagesByListing(@PathVariable UUID listingId) {
        return messageService.getMessagesByListing(listingId);
    }

    // Get conversation between two users
    @GetMapping("/chat")
    public List<Message> getConversation(
            @RequestParam UUID user1,
            @RequestParam UUID user2
    ) {
        return messageService.getConversation(user1, user2);
    }

    // Delete message
    @DeleteMapping("/{id}")
    public void deleteMessage(@PathVariable UUID id) {
        messageService.deleteMessage(id);
    }
}