'use client';

import { Jewels } from '@/lib/validationSchemas';
import { Card, Image } from 'react-bootstrap';

/* Renders a single product. See productspage/page.tsx. */
const ProductCard = ({ jewel }: { jewel: Jewels }) => (
  <Card>
    <Card.Header>
      <Image className="justify-context-center" src={jewel.image} width={80} />
      <Card.Title>
        {jewel.productName}
      </Card.Title>
      <Card.Subtitle>
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
