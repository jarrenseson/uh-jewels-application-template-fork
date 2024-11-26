'use client';

import { Card, Col, Container, Dropdown, Form, Row } from 'react-bootstrap';

const CartPage = () => (
  <Container className="py-3">
    <Row className="justify-content-center">
      <Col xs={10}>
        <Col className="text-center">
          <h2>Payment Method</h2>
        </Col>
        <Card>
          <Card.Body>
            <Form>
              <Row>
                <p>Please select a payment method</p>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Paypal
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>Visa</Dropdown.Item>
                    <Dropdown.Item>Master Card</Dropdown.Item>
                    <Dropdown.Item>American Express</Dropdown.Item>
                    <Dropdown.Item>Discover</Dropdown.Item>
                    <Dropdown.Item>JCB</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Row>
                  <Col>
                    <p>Card number</p>
                    <Form.Group>
                      <input
                        type="text"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <p>Expiration date</p>
                    <Row>
                      <Col>
                        <Form.Group>
                          <input
                            type="text"
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group>
                          <input
                            type="text"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <p>Security Code</p>
                    <Row>
                      <Col>
                        <Form.Group>
                          <input
                            type="text"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Row>
              <Row>
                <h1>Billing Information</h1>
                <Col>
                  <p>First Name</p>
                  <Form.Group>
                    <input
                      type="text"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <p>Last Name</p>
                  <Form.Group>
                    <input
                      type="text"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <p>City</p>
                  <Form.Group>
                    <input
                      type="text"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Billing Address</p>
                  <Form.Group>
                    <input
                      type="text"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <p>State/Province</p>
                  <Form.Group>
                    <input
                      type="text"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Billing address, line 2</p>
                  <Form.Group>
                    <input
                      type="text"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <p>Zip or postal code</p>
                  <Form.Group>
                    <input
                      type="text"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Country</p>
                  <Form.Group>
                    <input
                      type="text"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <p>Phone number</p>
                  <Form.Group>
                    <input
                      type="text"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default CartPage;
