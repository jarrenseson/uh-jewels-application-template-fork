'use server';

import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import CTable from '@/components/CartTable';
import { CartTable } from '@/components/CartTable';
import { Col, Container, Row, Table } from 'react-bootstrap';

const Cart = async () => {
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  const currentUser = session?.user?.email || '';

  // Fetch the user's cart from the database
  const cart = await prisma.cart.findUnique({
    where: { userEmail: currentUser },
    select: {
      userEmail: false,
      jewel: true,
    },
  });

  // Fetch all jewel prices from the database
  const prices = await prisma.jewels.findMany({
    select: {
      name: true,
      price: true,
      image: false,
      owner: false,
      description: false,
    },
  });

  type CartItemCounts = { [key: string]: number };
  let total = 0;
  const cartItems: CartTable[] = [];
  const priceMap: Map<string, number> = new Map();

  // Populate the price map with item names and their prices
  prices.forEach(item => priceMap.set(item.name, item.price));

  if (cart) {
    const count: CartItemCounts = cart.jewel.reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {} as CartItemCounts);

    // Calculate the total price based on item counts and prices
    for (const name in count) {
      if (Object.prototype.hasOwnProperty.call(count, name)) {
        const unitPrice = priceMap.get(name) ?? 0;
        total += count[name] * unitPrice;
        cartItems.push({ jewelName: name, quantity: count[name], price: unitPrice });
      }
    }
  }

  return (
    <main>
      <Table>
        <thead>
          <tr>
            <th>Jewel Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <CTable key={item.jewelName} {...item} />
          ))}
        </tbody>
      </Table>
    </main>
  );
};

export default Cart;
