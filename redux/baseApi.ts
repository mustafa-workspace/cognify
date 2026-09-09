import { getAuthCookies } from '@/lib/cookies';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

        const baseApi = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';    


export const api = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:baseApi,
        prepareHeaders:(headers) => {
            const token = getAuthCookies();
            if(token) headers.set('Authorization',`Bearer:${token}`)
            return headers;
        }
    }), 
    // for caching 
    tagTypes: ['Auth', 'User'], 
    refetchOnFocus:false,
    refetchOnReconnect:false,
    refetchOnMountOrArgChange:true,
    endpoints:() => ({})
});
