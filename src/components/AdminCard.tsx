'use client';

import { Jewels } from '@prisma/client';
import { Card, Image } from 'react-bootstrap';

/* Renders a single product. See productspage/page.tsx. */
const AdminCard = ({ jewel }: { jewel: Jewels }) => (
  <Card>
    <Card.Header>
      <Image className="justify-context-center" src={jewel.image} width={80} />
      <Card.Title>
        {jewel.name}
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

export default AdminCard;
