import AddShippingInfoForm from '@/components/AddShippingInfoForm';
import { getServerSession } from 'next-auth';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Jewels } from '@/lib/validationSchemas';
import { prisma } from '@/lib/prisma';

const AddShippingInfo = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );
  const jewels: Jewels[] = await prisma.jewels.findMany();
  console.log(jewels);
  return (
    <AddShippingInfoForm />
  );
};

export default AddShippingInfo;
