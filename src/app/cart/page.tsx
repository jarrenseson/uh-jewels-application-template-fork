'use client';

import ShoppingCartPage from '@/components/ShoppingCartPage';
// import PaymentPage from '@/components/PaymentPage';

/*
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
*/

const Cart = () => (
  <main>
    <ShoppingCartPage />
    {/* <PaymentPage /> */}
  </main>
);

export default Cart;
