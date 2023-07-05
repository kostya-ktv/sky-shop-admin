import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as zod from 'zod';

const formSchema = zod.object({
    name: zod.string(),
});
export type StoreModalSchemaType = zod.infer<typeof formSchema>;

const useStoreModalForm = () => {
    const form = useForm<StoreModalSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: {name: 'Test'},
    });
    return {
        form,
    };
};
export default useStoreModalForm;
