import useStore from '@/hooks/useStore';

interface IDashboard {
  params: {storeId: string};
}
const DashboardPage: React.FC<IDashboard> = async ({params}) => {
  const {store} = await useStore({
    storeId: params.storeId,
    disableAuth: true,
  });
  return <div>Active store {store?.name}</div>;
};

export default DashboardPage;
