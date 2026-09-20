import { api } from "../baseApi"
import { ApiResponse, User } from "@/types/AuthTypes";

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
            url: "/api/users/me?populate=*",
            method: "GET",
        }),
        providesTags: ["Auth"],
      }),

    //   logout: builder.mutation<void, void>({
    //   query: () => ({
    //     url: '/auth/logout',
    //     method: 'POST',
    //   }),
    //   // تنظيف الكاش الخاص ببيانات المستخدم بعد الخروج
    //   async onQueryStarted(_, { dispatch, queryFulfilled }) {
    //     try {
    //       await queryFulfilled;
    //       // إعادة ضبط كاش الـ API بالكامل
    //       dispatch(api.util.resetApiState());
    //     } catch (error) {
    //       console.error('Logout failed on server:', error);
    //     }
    //   },
    // }),
    })
});


export const { useLoginMutation, useRegisterMutation , useGetMeQuery } = authApi;