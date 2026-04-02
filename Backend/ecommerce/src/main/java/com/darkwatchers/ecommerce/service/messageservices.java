package com.example.demo.service;

import com.example.demo.entity.Message;
import com.example.demo.repository.MessageRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class MessageService {

    private final MessageRepository messageRepository;

    public MessageService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    // Send message
    public Message sendMessage(Message message) {
        return messageRepository.save(message);
    }

    // Get all messages
    public List<Message> getAllMessages() {
        return messageRepository.findAll();
    }

    // Get messages by listing
    public List<Message> getMessagesByListing(UUID listingId) {
        return messageRepository.findByListingId(listingId);
    }

    // Get conversation between two users
    public List<Message> getConversation(UUID user1, UUID user2) {
        return messageRepository
                .findBySenderIdAndReceiverIdOrSenderIdAndReceiverId(
                        user1, user2, user2, user1
                );
    }

    // Delete message
    public void deleteMessage(UUID id) {
        messageRepository.deleteById(id);
    }
}