import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { prisma } from '@/lib/prisma';
import EditCartItemForm from '@/components/EditCartItemForm';

export default async function EditCartItemPage({ params }: { params: { id: string | string[] } }) {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );
  const id = Number(Array.isArray(params?.id) ? params?.id[0] : params?.id);

  // Get cart item; ensure that jewelName is from params
  const cartItem: {
    id: number;
    jewelName: string;
    owner: string;
    quantity: number;
    pricePerUnit: number;
  } | null = await prisma.cartItems.findFirst({
    where: {
      id,
    },
  });

  console.log(cartItem);

  return (
    <main>
      {/* Check if cartItem is null before passing to the form */}
      {cartItem ? <EditCartItemForm cartItem={cartItem} /> : <p>Cart item not found</p>}
    </main>
  );
}
