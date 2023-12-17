
import { zodResolver } from "@hookform/resolvers/zod"
import {Form, FormControl,FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {useForm} from "react-hook-form";
import {signupValidation} from "@/lib/validation";
import {z} from "zod";
import {Loader} from "lucide-react";

/*FormDescription*/

const SigniupFrom = () => {
const isLoding=false;

    // 1. Define your form.
    const form = useForm<z.infer<typeof signupValidation>>({
        resolver: zodResolver(signupValidation),
        defaultValues: {
            name: '',
            username: '',
            email: '',
            password: '',
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof signupValidation>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (

            <Form {...form}>
                <div className="sm:w-420 flex-content flex-col">
                    <img src="../../../public/assets/images/logo.svg" alt=""/>

                    <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Create a New Account</h2>
                    <p className="text-light-3 small-medium md:base-reguler mt-2">To Use You Account Details</p>



                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>
                               {/* <FormDescription>
                                    This is your public display name.
                                </FormDescription>*/}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>UserName</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>
                               {/* <FormDescription>
                                    This is your public display name.
                                </FormDescription>*/}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" className="shad-input" {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                    This is your public display name.
                                </FormDescription>*/}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" className="shad-input" {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                    This is your public display name.
                                </FormDescription>*/}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="shad-button_primary">
                        {isLoding ?(
                            <div className="flex-center gap-2">
                               <Loader/> Loading...
                            </div>
                        ): "Sign Up"}
                    </Button>
                </form>
                </div>
            </Form>

    );

}
export default SigniupFrom;