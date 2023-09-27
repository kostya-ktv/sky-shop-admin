import prismadb from '@/lib/prisma.db';

interface IDashboard {
  params: {storeId: string};
}
const DashboardPage: React.FC<IDashboard> = async ({params}) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return <div>Active store {store?.name}</div>;
};

export default DashboardPage;
