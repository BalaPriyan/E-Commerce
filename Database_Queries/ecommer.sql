-- =========================================
-- B2B Textile Waste Marketplace DB Schema
-- =========================================

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- =========================================
-- ENUM TYPES
-- =========================================

CREATE TYPE user_role AS ENUM ('ADMIN', 'BUYER', 'SELLER');

CREATE TYPE listing_status AS ENUM ('ACTIVE', 'SOLD', 'INACTIVE');

CREATE TYPE order_status AS ENUM ('PENDING', 'CONFIRMED', 'SHIPPED', 'COMPLETED', 'CANCELLED');

CREATE TYPE shipment_status AS ENUM ('PENDING', 'IN_TRANSIT', 'DELIVERED');

CREATE TYPE payment_status AS ENUM ('PENDING', 'SUCCESS', 'FAILED');

-- =========================================
-- ORGANIZATIONS
-- =========================================

CREATE TABLE organizations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    gst_number VARCHAR(50) UNIQUE,
    industry_type VARCHAR(100),
    address TEXT,
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================
-- USERS
-- =========================================

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID REFERENCES organizations(id) ON DELETE SET NULL,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role user_role NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================
-- LISTINGS
-- =========================================

CREATE TABLE listings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    seller_id UUID REFERENCES users(id) ON DELETE CASCADE,
    organization_id UUID REFERENCES organizations(id),
    material_type VARCHAR(100),
    waste_type VARCHAR(100),
    quantity_kg NUMERIC(12,2),
    price_per_kg NUMERIC(10,2),
    location VARCHAR(255),
    description TEXT,
    status listing_status DEFAULT 'ACTIVE',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================
-- LISTING IMAGES
-- =========================================

CREATE TABLE listing_images (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    listing_id UUID REFERENCES listings(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL
);

-- =========================================
-- ORDERS
-- =========================================

CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    buyer_id UUID REFERENCES users(id),
    listing_id UUID REFERENCES listings(id),
    quantity_kg NUMERIC(12,2),
    agreed_price NUMERIC(10,2),
    status order_status DEFAULT 'PENDING',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================
-- MESSAGES (CHAT)
-- =========================================

CREATE TABLE messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sender_id UUID REFERENCES users(id),
    receiver_id UUID REFERENCES users(id),
    listing_id UUID REFERENCES listings(id),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================
-- SHIPMENTS
-- =========================================

CREATE TABLE shipments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id),
    pickup_address TEXT,
    delivery_address TEXT,
    status shipment_status DEFAULT 'PENDING',
    tracking_number VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================
-- PAYMENTS
-- =========================================

CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id),
    amount NUMERIC(12,2),
    payment_method VARCHAR(50),
    status payment_status DEFAULT 'PENDING',
    transaction_ref VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================
-- REVIEWS
-- =========================================

CREATE TABLE reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reviewer_id UUID REFERENCES users(id),
    reviewee_id UUID REFERENCES users(id),
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================
-- AUDIT LOGS (ZERO TRUST)
-- =========================================

CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID,
    action VARCHAR(255),
    entity_type VARCHAR(100),
    entity_id UUID,
    metadata JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================
-- SECURE FIELDS (PQC READY)
-- =========================================

CREATE TABLE secure_fields (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_type VARCHAR(100),
    entity_id UUID,
    encrypted_data BYTEA,
    encrypted_key BYTEA,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================
-- INDEXES (PERFORMANCE)
-- =========================================

CREATE INDEX idx_users_email ON users(email);

CREATE INDEX idx_listings_material ON listings(material_type);
CREATE INDEX idx_listings_price ON listings(price_per_kg);
CREATE INDEX idx_listings_location ON listings(location);

CREATE INDEX idx_orders_status ON orders(status);

CREATE INDEX idx_messages_listing ON messages(listing_id);

CREATE INDEX idx_audit_logs_user ON audit_logs(user_id);

-- =========================================
-- DONE
-- =========================================
