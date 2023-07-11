'use client';
import {useStoreModal} from '@/components/modals/StoreModal/hooks/useStoreModal';
import {useEffect} from 'react';

const SetupPage = () => {
  const {isOpen, onOpen} = useStoreModal();

  useEffect(() => {
    if (!isOpen) onOpen();
  }, [isOpen, onOpen]);
  return <div></div>;
};
export default SetupPage;
