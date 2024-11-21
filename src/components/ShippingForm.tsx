'use client';

import { Card, Col, Container, Form, Row } from 'react-bootstrap';

const ShippingForm = () => (
  <Container className="py-3">
    <Row className="justify-content-center">
      <Col xs={5}>
        <Col className="text-center">
          <h2>Shipping Details</h2>
        </Col>
        <Card>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Label>Address Line 1</Form.Label>
                <input
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Address Line 2</Form.Label>
                <input
                  type="string"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>City</Form.Label>
                <input type="string" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Postal/Zip Code</Form.Label>
                <input type="string" />
              </Form.Group>
              <Form.Group>
                <Form.Label>State</Form.Label>
                <input type="string" />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ShippingForm;
