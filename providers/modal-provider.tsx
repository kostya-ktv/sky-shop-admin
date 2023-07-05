'use client';

import {useEffect, useState} from 'react';
import {StoreModal} from '@/components/modals/StoreModal/StoreModal';

export const ModalProvider = () => {
 const [isMounted, setIsMounted] = useState(false);
 useEffect(() => {
  setIsMounted(true);
 }, []);

 return isMounted ? (
  <>
   <StoreModal />
  </>
 ) : null;
};
