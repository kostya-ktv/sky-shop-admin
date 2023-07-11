import useStore from '@/hooks/useStore';
import prismadb from '@/lib/prisma.db';
import React from 'react';

interface IDashboard {
  params: {storeId: string};
}
const DashboardPage: React.FC<IDashboard> = async ({params}) => {
  const {store} = await useStore({storeId: params.storeId});
  return <div>Active store {store?.name}</div>;
};

export default DashboardPage;
