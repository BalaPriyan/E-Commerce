package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.entity.Organization;
import java.util.UUID;

public interface OrganizationRepository extends JpaRepository<Organization, UUID> {
}