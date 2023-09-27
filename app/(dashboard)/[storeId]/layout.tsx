import {redirect} from 'next/navigation';
import Navbar from '@/components/navbar/navbar';
import {auth} from '@clerk/nextjs';
import prismadb from '@/lib/prisma.db';

export default async function Dashboard({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {storeId: string};
}) {
  const {userId} = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect('/');
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
