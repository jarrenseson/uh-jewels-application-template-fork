'use client';

import { Col } from 'react-bootstrap';

const ShoppingCartPage = () => (
  <div className="text-center ">
    <Col>
      <div className="text-center">
        <h1>Your cart is empty</h1>
        <p>Get to Shopping!</p>
      </div>
    </Col>
    <Col>
      <a
        href="/payment"
        style={{
          display: 'inline-block',
          padding: '12px 24px',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#7393B3',
          textDecoration: 'none',
          border: '2px black', // White outline
          borderRadius: '0px', // Square corners (90-degree angles)
          backgroundColor: '#B6D0E2', // Transparent background
          textAlign: 'center',
          letterSpacing: '1px', // Slight spacing between letters
          transition: 'background-color 0.3s ease', // Smooth background transition
          marginTop: '20px', // Add some space between the text and the button
        }}
      >
        Proceed to Payment
      </a>
    </Col>
  </div>
);

export default ShoppingCartPage;
