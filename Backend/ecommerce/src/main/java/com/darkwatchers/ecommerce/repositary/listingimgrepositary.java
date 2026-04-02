package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.entity.ListingImage;
import java.util.UUID;
import java.util.List;

public interface ListingImageRepository extends JpaRepository<ListingImage, UUID> {

    List<ListingImage> findByListingId(UUID listingId);
}