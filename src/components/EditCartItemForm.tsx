'use client';

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { yupResolver } from '@hookform/resolvers/yup';
import { CartItems } from '@prisma/client';
import { EditCartItemSchema } from '@/lib/validationSchemas';
import { editCart } from '@/lib/dbActions';

const onSubmit = async (data: CartItems) => {
  await editCart(data);
  swal('Success', 'Your item has been updated', 'success', {
    timer: 2000,
  });
};

const EditCartItemForm = ({ cartItem }: { cartItem: CartItems }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CartItems>({
    resolver: yupResolver(EditCartItemSchema),
  });

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h2 className="text-center mb-4 text-primary">{cartItem.jewelName}</h2>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register('id')} value={cartItem.id} />
                <input type="hidden" {...register('jewelName')} value={cartItem.jewelName} />

                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    {...register('quantity')}
                    defaultValue={cartItem.quantity}
                    isInvalid={!!errors.quantity}
                    placeholder="Enter quantity"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.quantity?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <input type="hidden" {...register('owner')} value={cartItem.owner} />
                <input type="hidden" {...register('pricePerUnit')} value={cartItem.pricePerUnit} />

                <div className="d-flex justify-content-between mt-4">
                  <Button type="submit" variant="primary" className="px-4">
                    Save Changes
                  </Button>
                  <Button
                    type="button"
                    onClick={() => reset()}
                    variant="outline-secondary"
                    className="px-4"
                  >
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

export default EditCartItemForm;
