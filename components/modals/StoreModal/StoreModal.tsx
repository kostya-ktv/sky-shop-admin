'use client';
import {Modal} from '@/components/ui/modal';
import {useStoreModal} from '@/components/modals/StoreModal/hooks/useStoreModal';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from '../../ui/form';
import {Input} from '../../ui/input';
import {Button} from '../../ui/button';
import useSubmitStoreModal from './hooks/useSubmitStoreModal';
import useStoreModalForm, {
  StoreModalSchemaType,
} from './hooks/useStoreModalForm';

export const StoreModal = () => {
  const storeModal = useStoreModal();
  const {form} = useStoreModalForm();
  const {loading, onSubmit} = useSubmitStoreModal<StoreModalSchemaType>();

  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="E commerce"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                name="name"
                control={form.control}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                  disabled={loading}
                  variant="outline"
                  onClick={storeModal.onClose}
                >
                  Cancel
                </Button>
                <Button disabled={loading} type="submit">
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
