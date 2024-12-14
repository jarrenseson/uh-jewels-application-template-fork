'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button, Card, Col, Container, Dropdown, Form, Row } from 'react-bootstrap';

const PaymentPage = () => {
  const [selectedPayment, setSelectedPayment] = useState('--');
  const [selectedMonth, setSelectedMonth] = useState('--');
  const paymentMethods = ['--', 'Visa', 'Master Card', 'American Express', 'Discover', 'JCB'];

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
                    </Dropdown.Toggle>
                    <Dropdown.Menu data-bs-theme="dark">
                      {paymentMethods.map((method) => (
                        <Dropdown.Item key={method} onClick={() => handleSelect(method)}>
                          {method}
                        </Dropdown.Item>
                      ))}
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
                            </Dropdown.Toggle>
                            <Dropdown.Menu data-bs-theme="dark">
                              {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                                // eslint-disable-next-line max-len
                                <Dropdown.Item key={month} onClick={() => handleSelect(month.toString().padStart(2, '0'))}>
                                  {month.toString().padStart(2, '0')}
                                </Dropdown.Item>
                              ))}
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
                <h1 className="mt-3">Billing Information</h1>
                <Row>
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
                  {' '}
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
