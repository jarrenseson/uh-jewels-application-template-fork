'use client';

import { useSession } from 'next-auth/react';
import { AddToCartSchema, Jewels } from '@/lib/validationSchemas';
import { Button, Card, Image } from 'react-bootstrap';
import { addToCart } from '@/lib/dbActions';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import LoadingSpinner from './LoadingSpinner';

/* Renders a single product. See productspage/page.tsx. */
const ProductCard = ({ jewel }: { jewel: Jewels }) => {
  const { data: session } = useSession();
  const currentUser = session?.user?.email;
  const { status } = useSession();

  if (currentUser){
    AddToCart({userEmail: currentUser});
  }
  else {
    alert('you must be logged in to add items')
  }
  }
  const AddToCart = async (data: { userEmail: string }) => {
    await addToCart(data);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddToCartSchema),
  });

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  return (
    <Card>
      <Card.Header>
        <Image className="mx-auto d-block" src={jewel.image} width={200} />
        <Card.Title>
          {jewel.name}
        </Card.Title>
        <Card.Subtitle>
          $
          {' '}
          {jewel.price}
        </Card.Subtitle>
        <Card.Body>
          <Card.Text>
            {jewel.description}
          </Card.Text>
        </Card.Body>
      </Card.Header>
      <Card.Footer>
        <Button type="button" onClick={() => AddToCart({userEmail: currentUser})} className="btn btn-warning float-right" />
      </Card.Footer>
    </Card>
  );
};
export default ProductCard;
