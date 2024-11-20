import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="mt-auto py-3 footercolor">
    <Container>
      <Row className="text-center">
        <Col>
          <p style={{ fontSize: '12px' }}>Thank you for supporting local</p>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <p style={{ fontSize: '10px' }}>Created by Katelyn Sung, Waltz Axl Tuzon, and Jarren Seson</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
