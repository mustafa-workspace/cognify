import { api } from "../baseApi"
import { ApiResponse } from "@/types/AuthTypes";

export const authApi = api.injectEndpoints({
    endpoints:builder => ({
        // login 
        login:builder.mutation<ApiResponse, {identifier:string,password:string}>({ // mutation its for post put delete 
            query:(body) => ({
                url:'/api/auth/local',
                method:'POST',
                    body
            }),
            invalidatesTags: ['Auth']
        }),

        // Register 
        register:builder.mutation({
            query:(body) => ({
                url:'/api/auth/local/register',
                method:'POST',
                body
            }),
            invalidatesTags: ['Auth']
        }),

         // Get current logged-in user
        getMe: builder.query<User, void>({
        query: () => ({
            url: "/api/users/me",
            method: "GET",
        }),
        providesTags: ["Auth"],
        }),
    })
});


export const { useLoginMutation, useRegisterMutation , useGetMeQuery } = authApi;