'use client';

import { useSession } from 'next-auth/react';
import { Jewels } from '@/lib/validationSchemas';
import { Button, Card, Image } from 'react-bootstrap';
import { addCartItems } from '@/lib/dbActions';
import LoadingSpinner from './LoadingSpinner';

/* Renders a single product. See productspage/page.tsx. */
const ProductCard = ({ jewel }: { jewel: Jewels }) => {
  const { data: session, status } = useSession(); // Combine `data` and `status`
  const currentUser = session?.user?.email;

  const addToCart = async (data:{
    owner: string,
    jewelName: string,
    quantity: number,
    pricePerUnit: number,
  }) => {
    await addCartItems({
      owner: data.owner,
      jewelName: data.jewelName,
      quantity: data.quantity,
      pricePerUnit: data.pricePerUnit,
    });
  };

  // Show a loading spinner while session is loading
  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  return (
    <Card>
      <Card.Header>
        <Image className="mx-auto d-block" src={jewel.image} width={200} />
        <Card.Title>{jewel.name}</Card.Title>
        <Card.Subtitle>
          $
          {' '}
          {jewel.price}
        </Card.Subtitle>
        <Card.Body>
          <Card.Text>{jewel.description}</Card.Text>
        </Card.Body>
      </Card.Header>
      <Card.Footer>
        <Button
          type="button"
          onClick={() => {
            if (currentUser) {
              addToCart({
                owner: currentUser,
                jewelName: jewel.name,
                quantity: 1,
                pricePerUnit: jewel.price,
              });
            }
          }}
          className="btn btn-warning float-right"
        >
          Add to Cart
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
