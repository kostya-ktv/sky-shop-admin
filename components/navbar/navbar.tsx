import {UserButton} from '@clerk/nextjs';
import {MainNav} from '@/components/navbar/MainNav/MainNav';
import StoreSwitcher from '../StoreSwitcher/StoreSwitcher';
import prismadb from '@/lib/prisma.db';
import useUser from '@/hooks/useUser';

const Navbar = async () => {
  const {userId} = useUser();

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={stores} />
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
