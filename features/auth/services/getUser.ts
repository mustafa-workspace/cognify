import { LoginSchemaForm } from "@/validation/login.schema";
import axios from "axios";



export default  async function UserLoginSubmiting(data:any) {
    const Path = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
    try {
    const res = 
    await axios
    .post(`${Path}/api/auth/local`, {
        identifier:data.email,
        password:data.password
    });
    
    if (res) {
        return res;
    } 
    
    } catch (error: any) {
        // This will print the precise validation error message from Strapi
        console.log(error.response?.data);
        throw error;
    }
};

