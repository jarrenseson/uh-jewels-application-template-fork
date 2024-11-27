'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button, Card, Col, Container, Dropdown, Form, Row } from 'react-bootstrap';

const PaymentPage = () => {
  const [selectedPayment, setSelectedPayment] = useState('--');
  const [selectedMonth, setSelectedMonth] = useState('--');

  const handleSelect = (paymentMethod: string) => {
    setSelectedPayment(paymentMethod);
    setSelectedMonth(paymentMethod);
  };

  const pathName = usePathname();

  return (
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
                      {selectedPayment}
                      {' '}
                      {/* Display the selected payment method */}
                    </Dropdown.Toggle>
                    <Dropdown.Menu data-bs-theme="dark">
                      <Dropdown.Item onClick={() => handleSelect('--')}>--</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleSelect('Visa')}>Visa</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleSelect('Master Card')}>Master Card</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleSelect('American Express')}>American Express</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleSelect('Discover')}>Discover</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleSelect('JCB')}>JCB</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Row>
                    <Col>
                      <p>Card number</p>
                      <Form.Group>
                        <input
                          type="text"
                          style={{ height: '35px' }}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <p>Expiration date</p>
                      <Row>
                        <Col>
                          <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                              {selectedMonth}
                              {' '}
                              {/* Display the selected payment method */}
                            </Dropdown.Toggle>
                            <Dropdown.Menu data-bs-theme="dark">
                              <Dropdown.Item onClick={() => handleSelect('--')}>--</Dropdown.Item>
                              <Dropdown.Item onClick={() => handleSelect('01')}>01</Dropdown.Item>
                              <Dropdown.Item onClick={() => handleSelect('02')}>02</Dropdown.Item>
                              <Dropdown.Item onClick={() => handleSelect('03')}>03</Dropdown.Item>
                              <Dropdown.Item onClick={() => handleSelect('04')}>04</Dropdown.Item>
                              <Dropdown.Item onClick={() => handleSelect('05')}>05</Dropdown.Item>
                              <Dropdown.Item onClick={() => handleSelect('06')}>06</Dropdown.Item>
                              <Dropdown.Item onClick={() => handleSelect('07')}>07</Dropdown.Item>
                              <Dropdown.Item onClick={() => handleSelect('08')}>08</Dropdown.Item>
                              <Dropdown.Item onClick={() => handleSelect('09')}>09</Dropdown.Item>
                              <Dropdown.Item onClick={() => handleSelect('10')}>10</Dropdown.Item>
                              <Dropdown.Item onClick={() => handleSelect('11')}>11</Dropdown.Item>
                              <Dropdown.Item onClick={() => handleSelect('12')}>12</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Col>
                        <Col>
                          <Form.Group>
                            <input
                              type="text"
                              placeholder="----"
                              style={{ width: '150%', height: '35px' }}
                            />
                          </Form.Group>
                        </Col>
                        <Col />
                        <Col />
                      </Row>
                    </Col>
                    <Col>
                      <p>Security Code</p>
                      <Row>
                        <Col>
                          <Form.Group>
                            <input
                              type="text"
                              style={{ width: '25%', height: '35px' }}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Row>
                <Row className="mt-3">
                  <h1>Billing Information</h1>
                  <Col>
                    <Row>
                      <Col>
                        <p>First Name</p>
                        <Form.Group>
                          <input
                            type="text"
                            style={{ width: '150px', height: '35px' }}
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <p>Last Name</p>
                        <Form.Group>
                          <input
                            type="text"
                            style={{ width: '150px', height: '35px' }}
                          />
                        </Form.Group>
                      </Col>
                      <Col />
                    </Row>
                  </Col>
                  <Col>
                    <p>City</p>
                    <Form.Group>
                      <input
                        type="text"
                        style={{ height: '35px' }}
                      />
                    </Form.Group>
                  </Col>
                  <Col />
                </Row>
                <Row>
                  <Col>
                    <p>Billing Address</p>
                    <Form.Group>
                      <input
                        type="text"
                        style={{ height: '35px' }}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <p>State/Province</p>
                    <Form.Group>
                      <input
                        type="text"
                        style={{ height: '35px' }}
                      />
                    </Form.Group>
                  </Col>
                  <Col />
                </Row>
                <Row>
                  <Col>
                    <p>Billing address, line 2</p>
                    <Form.Group>
                      <input
                        type="text"
                        style={{ height: '35px' }}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <p>Zip or postal code</p>
                    <Form.Group>
                      <input
                        type="text"
                        style={{ height: '35px' }}
                      />
                    </Form.Group>
                  </Col>
                  <Col />
                </Row>
                <Row>
                  <Col>
                    <p>Country</p>
                    <Form.Group>
                      <input
                        type="text"
                        style={{ height: '35px' }}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <p>Phone number</p>
                    <Form.Group>
                      <input
                        type="text"
                        style={{ height: '35px' }}
                      />
                    </Form.Group>
                  </Col>
                  <Col />
                </Row>
              </Form>
              <Row>
                <Button
                  variant="secondary"
                  href="/shipping"
                  active={pathName === '/shipping'}
                  className="ms-auto me-auto mt-4"
                  style={{ width: '98%' }}
                >
                  Continue to Shipping Form
                  {' >>> '}
                </Button>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentPage;
