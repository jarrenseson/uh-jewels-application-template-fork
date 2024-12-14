import { getServerSession } from 'next-auth';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import ProductCard from '@/components/ProductCard';
import { Jewels } from '@/lib/validationSchemas';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

const ListPage = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  const jewels: Jewels[] = await prisma.jewels.findMany();

  return (
    <main>
      <Container fluid className="py-3">
        <h1 className="text-center mb-4">Shop Jewels</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {jewels.map((jewel) => (
            <Col key={jewel.name} className="d-flex justify-content-center">
              <ProductCard jewel={jewel} />
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Link href="/order" passHref>
            <Button variant="primary">Place Order</Button>
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default ListPage;
