import {auth} from '@clerk/nextjs';
import {redirect} from 'next/navigation';

const useUser = () => {
  const {userId, user} = auth();
  if (!user || !userId) redirect('/sign-in');
  return {
    user,
    userId,
  };
};
export default useUser;
