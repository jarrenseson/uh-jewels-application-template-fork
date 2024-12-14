'use server';

import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import CTable from '@/components/CartTable';
import { Col, Container, Row, Table, Button } from 'react-bootstrap';

const Cart = async () => {
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  const currentUser = session?.user?.email || '';

  // Fetch the user's cart from the database
  const cart = await prisma.cartItems.findMany({
    where: { owner: currentUser },
    select: {
      id: true,
      owner: true,
      jewelName: true,
      quantity: true,
      pricePerUnit: true,
    },
  });

  // eslint-disable-next-line no-param-reassign
  const total = cart.reduce((price, item) => price += item.quantity * item.pricePerUnit, 0);

  return (
    <main className="cart-page">
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={10}>
            <h1 className="text-center mb-4 text-gradient">Your Shopping Cart</h1>
            {cart.length > 0 ? (
              <Table bordered hover responsive className="cart-table shadow-lg rounded border-0">
                <thead className="table-dark text-uppercase">
                  <tr>
                    <th>Jewel Name</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>{}</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <CTable
                      key={item.id}
                      {...item}
                    />
                  ))}
                </tbody>
                <tfoot>
                  <tr className="table-light">
                    <td colSpan={3} className="text-end fw-bold">Total:</td>
                    <td className="fw-bold">
                      $
                      {total.toFixed(2)}
                    </td>
                  </tr>
                </tfoot>
              </Table>
            ) : (
              <p className="text-center fs-5 text-muted">Your cart is empty.</p>
            )}
            <div className="text-center mt-4">
              <Button variant="primary" href="/payment">Proceed to Payment</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Cart;
