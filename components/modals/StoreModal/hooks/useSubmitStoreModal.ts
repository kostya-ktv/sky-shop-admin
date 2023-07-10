import axios from 'axios';
import {useState} from 'react';
import {toast} from 'react-hot-toast';

const useSubmitStoreModal = <T>() => {
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (values: T) => {
    setLoading(true);
    await axios
      .post('/api/stores', values)
      .then(result => {
        window.location.assign(`${result.data.id}`);
      })
      .catch(err => {
        toast.error('Something went wrong');
      })
      .finally(() => setLoading(false));
  };

  return {
    onSubmit,
    loading,
  };
};
export default useSubmitStoreModal;
