import prismadb from '@/lib/prisma.db';
import useUser from './useUser';
import {redirect} from 'next/navigation';

const useStore = async (options?: {
  storeId?: string;
  redirectToStore?: boolean;
}) => {
  const {userId} = useUser();

  const params: {userId: string; id?: string} = {
    userId,
  };

  if (options?.storeId) params['id'] = options.storeId;

  const store = await prismadb.store.findFirst({
    where: params,
  });
  if (store && options?.redirectToStore) redirect(`/${store.id}`);
  if (!store) redirect('/');

  return {
    store,
  };
};
export default useStore;
