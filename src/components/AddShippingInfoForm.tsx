'use client';

import { useSession } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
/**
import { redirect } from 'next/navigation';
 */
import { addShippingInfo } from '@/lib/dbActions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { AddShippingInfoSchema } from '@/lib/validationSchemas';

const onSubmit = async (data: {
  firstName: string,
  lastName: string,
  address1: string,
  address2: string,
  city: string,
  zip: string,
  state: string,
  country: string }) => {
  // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
  await addShippingInfo(data);
  swal('Your order has been placed!', 'Thank you for shopping UH Jewels', 'Enjoy', {
    timer: 2000,
  });
};

const AddShippingInfoForm: React.FC = () => {
  const { status } = useSession();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddShippingInfoSchema),
  });

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="text-center mb-4">Shipping Information</h2>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <h5 className="mb-3">Personal Details</h5>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>First Name</Form.Label>
                      <input
                        type="text"
                        {...register('firstName')}
                        placeholder="Enter your first name"
                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.firstName?.message}</div>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Last Name</Form.Label>
                      <input
                        type="text"
                        {...register('lastName')}
                        placeholder="Enter your last name"
                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.lastName?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>

                <h5 className="mb-3">Address Details</h5>
                <Form.Group className="mb-3">
                  <Form.Label>Address Line 1</Form.Label>
                  <input
                    type="text"
                    {...register('address1')}
                    placeholder="Street address, P.O. Box, etc."
                    className={`form-control ${errors.address1 ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.address1?.message}</div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Address Line 2</Form.Label>
                  <input
                    type="text"
                    {...register('address2')}
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    className={`form-control ${errors.address2 ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.address2?.message}</div>
                </Form.Group>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>City</Form.Label>
                      <input
                        type="text"
                        {...register('city')}
                        placeholder="Enter your city"
                        className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.city?.message}</div>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Zip/Postal Code</Form.Label>
                      <input
                        type="text"
                        {...register('zip')}
                        placeholder="Enter your zip code"
                        className={`form-control ${errors.zip ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.zip?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>State</Form.Label>
                      <input
                        type="text"
                        {...register('state')}
                        placeholder="Enter your state"
                        className={`form-control ${errors.state ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.state?.message}</div>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Country</Form.Label>
                      <input
                        type="text"
                        {...register('country')}
                        placeholder="Enter your country"
                        className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.country?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>

                <div className="d-flex justify-content-between mt-4">
                  <Button type="submit" variant="primary">
                    Submit
                  </Button>
                  <Button type="button" onClick={() => reset()} variant="warning">
                    Reset
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddShippingInfoForm;
