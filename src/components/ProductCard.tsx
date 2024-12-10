'use client';

import { Jewels } from '@/lib/validationSchemas';
import { Card, Image } from 'react-bootstrap';

/* Renders a single product. See productspage/page.tsx. */
const ProductCard = ({ jewel }: { jewel: Jewels }) => (
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
  </Card>
);

export default ProductCard;
