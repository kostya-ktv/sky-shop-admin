import useUser from '@/hooks/useUser';
import prismadb from '@/lib/prisma.db';

interface SettingsPageProps {
  params: {
    storeId: string;
  };
}
const SettingsPage: React.FC<SettingsPageProps> = async ({params}) => {
  const {userId} = useUser();
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });
  return <div></div>;
};
export default SettingsPage;
