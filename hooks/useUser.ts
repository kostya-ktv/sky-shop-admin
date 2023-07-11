import {auth} from '@clerk/nextjs';
import {redirect} from 'next/navigation';

const useUser = (disableRedirect?: boolean) => {
  const {userId} = auth();
  if (!userId && !disableRedirect) redirect('/sign-in');
  return {
    userId: userId as string,
  };
};
export default useUser;
