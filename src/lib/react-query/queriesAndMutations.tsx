import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery,
} from '@tanstack/react-query'
import {createUserAccount, signInAccount} from "@/lib/appWrite/api.ts";
import {INewUser} from "@/type";

export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user:INewUser) => createUserAccount(user),

    })
}


export const useSignAccount = () => {
    return useMutation({
        mutationFn: (user:{
            email:string;
            password:string;
        }) => signInAccount(user),

    })
}