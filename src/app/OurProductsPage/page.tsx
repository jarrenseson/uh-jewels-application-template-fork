'use client';

import React from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';

// Dummy product data (replace with API fetch or database query)
const products = [
  // eslint-disable-next-line max-len
  { id: 1, name: 'The Kona', description: 'A stunning choker necklace with a large Kona Abalone centerpiece.', price: '$60', image: '/chokernecklace.png' },
  // eslint-disable-next-line max-len
  { id: 2, name: 'Blue Dream Necklace', description: 'A medium sized Kona Abalone shell with a dangling freshwater pearl.', price: '$40', image: '/necklace.png' },
  // eslint-disable-next-line max-len
  { id: 3, name: 'Drop Bracelet', description: 'A italian style adjustable sterling silver bracelet with a keiki abalone.', price: '$30', image: '/bracelet.png' },
];

// eslint-disable-next-line react/prop-types
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const ProductCard = ({ product }: { product: Product }) => (
  <Col md={4} className="mb-4">
    <Card>
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text><strong>{product.price}</strong></Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  </Col>
);

const OurProductsPage = () => (
  <Container className="py-4">
    <Row className="text-center mb-4 f1">
      <Col>
        <h2>The Kona Collection</h2>
        <p>Explore the Kona Collection carefully handmade with love on Oahu.</p>
      </Col>
    </Row>
    <Row>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Row>
  </Container>
);

export default OurProductsPage;
