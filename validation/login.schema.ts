import {email, z} from 'zod';

export const LoginSchema =  z.object({
       email:z.string().email("Email is invalid").min(1,'This field is required'),
       password:z.string().min(4,'Password must be more than 4 characters').max(15,"Password Must be less than 15 characters")
       
})



export type LoginSchemaForm = z.infer<typeof LoginSchema>