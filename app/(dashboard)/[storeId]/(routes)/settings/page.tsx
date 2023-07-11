import useStore from '@/hooks/useStore';
import {SettingsForm} from './components/SettingsForm';

interface SettingsPageProps {
  params: {
    storeId: string;
  };
}
const SettingsPage: React.FC<SettingsPageProps> = async ({params}) => {
  // const {store} = await useStore();
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6 ">
        <SettingsForm />
      </div>
    </div>
  );
};
export default SettingsPage;
