'use client';

import { useSession } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { redirect } from 'next/navigation';
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
  swal('Success', 'Your shipping info has been added', 'success', {
    timer: 2000,
  });
};

const AddShippingInfoForm: React.FC = () => {
  const { data: session, status } = useSession();
  // console.log('AddStuffForm', status, session);
  /* const currentUser = session?.user?.email || ''; */
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
  if (status === 'unauthenticated') {
    redirect('/auth/signin');
  }
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center">
            <h2>Shipping Information</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.Label>First name</Form.Label>
                  <input
                    type="text"
                    {...register('firstName')}
                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.firstName?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <input
                    type="text"
                    {...register('lastName')}
                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.lastName?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Address Line 1</Form.Label>
                  <input
                    type="text"
                    {...register('address1')}
                    className={`form-control ${errors.address1 ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.address1?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Address Line 2</Form.Label>
                  <input
                    type="text"
                    {...register('address2')}
                    className={`form-control ${errors.address2 ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.address2?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <input
                    type="text"
                    {...register('city')}
                    className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.city?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Zip/Postal Code</Form.Label>
                  <input
                    type="text"
                    {...register('zip')}
                    className={`form-control ${errors.zip ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.zip?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>State</Form.Label>
                  <input
                    type="text"
                    {...register('state')}
                    className={`form-control ${errors.state ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.state?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Country</Form.Label>
                  <input
                    type="text"
                    {...register('country')}
                    className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.country?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Row className="pt-3">
                    <Col>
                      <Button type="submit" variant="primary">
                        Submit
                      </Button>
                    </Col>
                    <Col>
                      <Button type="button" onClick={() => reset()} variant="warning" className="float-right">
                        Reset
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddShippingInfoForm;
