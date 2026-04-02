package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.entity.Listing;

import java.util.List;
import java.util.UUID;

public interface ListingRepository extends JpaRepository<Listing, UUID> {

    List<Listing> findByMaterialType(String materialType);
    List<Listing> findByLocation(String location);
}