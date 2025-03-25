/*
  # Create products table

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `price` (decimal)
      - `image_url` (text)
      - `category` (text)
      - `discount` (integer, nullable)
      - `created_at` (timestamp)
      - `active` (boolean)

  2. Security
    - Enable RLS on `products` table
    - Add policy for public read access
    - Add policy for authenticated users to manage products
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price decimal(10,2) NOT NULL,
  image_url text NOT NULL,
  category text NOT NULL,
  discount integer,
  created_at timestamptz DEFAULT now(),
  active boolean DEFAULT true
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow public read access to active products
CREATE POLICY "Products are viewable by everyone" ON products
  FOR SELECT
  USING (active = true);

-- Allow authenticated users to manage products
CREATE POLICY "Authenticated users can manage products" ON products
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);