import prismadb from '@/lib/prisma.db';
import useUser from './useUser';
import {redirect, usePathname} from 'next/navigation';

const useStore = async (options?: {
  storeId?: string;
  disableAuth?: boolean;
  redirectToStore?: boolean;
}) => {
  const {userId} = useUser(options?.disableAuth);
  const pathname = usePathname();
  const params: {userId: string; id?: string} = {
    userId,
  };

  if (options?.storeId) params['id'] = options.storeId;

  const store = await prismadb.store.findFirst({
    where: params,
  });
  if (store && options?.redirectToStore) redirect(`/${store.id}`);
  if (!store && pathname !== '/') redirect('/');

  return {
    store,
  };
};
export default useStore;
