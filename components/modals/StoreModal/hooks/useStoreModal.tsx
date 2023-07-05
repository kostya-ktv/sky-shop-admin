import {create} from "zustand";

interface IUseStoreModal {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useStoreModal = create<IUseStoreModal>((set) => ({
    isOpen: false,
    onClose: () => set({isOpen: false}),
    onOpen: () => set({isOpen: true})
}))