import Navbar from '@/components/navbar/navbar';
import useStore from '@/hooks/useStore';

export default async function Dashboard({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {storeId: string};
}) {
  const {store} = await useStore({storeId: params.storeId});

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
