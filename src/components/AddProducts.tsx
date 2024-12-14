'use client';

import { useSession } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { redirect } from 'next/navigation';
import { addJewels } from '@/lib/dbActions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { AddJewelsSchema } from '@/lib/validationSchemas';

const AddProductForm: React.FC = () => {
  const { data: session, status } = useSession();
  const currentUser = session?.user?.email || '';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddJewelsSchema),
  });

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (status === 'unauthenticated') {
    redirect('/auth/signin');
  }

  const onSubmit = async (data: { name: string; price: number; owner: string; description: string; image: string }) => {
    await addJewels(data);
    swal('Success', 'Your item has been added', 'success', {
      timer: 2000,
    });
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg border-0 rounded-3">
            <Card.Body>
              <Col className="text-center mb-4">
                <h2>List New Item</h2>
              </Col>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('name')}
                    isInvalid={!!errors.name}
                    className="shadow-sm"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    {...register('price')}
                    isInvalid={!!errors.price}
                    className="shadow-sm"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.price?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('description')}
                    isInvalid={!!errors.description}
                    className="shadow-sm"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.description?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('image')}
                    isInvalid={!!errors.image}
                    className="shadow-sm"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.image?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <input type="hidden" {...register('owner')} value={currentUser} />

                <Form.Group className="d-flex justify-content-between mt-4">
                  <Button type="submit" variant="primary" className="w-100">
                    Submit
                  </Button>
                  <Button type="button" onClick={() => reset()} variant="warning" className="w-100 mt-2">
                    Reset
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProductForm;
