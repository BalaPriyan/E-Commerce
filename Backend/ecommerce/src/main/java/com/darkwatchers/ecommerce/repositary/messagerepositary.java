package com.example.demo.repository;

import com.example.demo.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface MessageRepository extends JpaRepository<Message, UUID> {

    // Chat between two users
    List<Message> findBySenderIdAndReceiverId(UUID senderId, UUID receiverId);

    // Messages for a listing
    List<Message> findByListingId(UUID listingId);

    // Conversation (both directions)
    List<Message> findBySenderIdAndReceiverIdOrSenderIdAndReceiverId(
        UUID sender1, UUID receiver1,
        UUID sender2, UUID receiver2
    );
}