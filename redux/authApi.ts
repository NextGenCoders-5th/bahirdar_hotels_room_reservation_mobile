import {
  ILoginRequest,
  ILoginResponse,
  ISignupRequest,
  ISignupResponse,
} from '@/types/authTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '@/constants/env';

const AUTH_BASE_URL = `${API_BASE_URL}/auth`;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: AUTH_BASE_URL, credentials: 'include' }),
  // baseQuery: async (args, api, extraOptions) => {
  //   const baseQuery = fetchBaseQuery({
  //     baseUrl: AUTH_BASE_URL,
  //   });

  //   try {
  //     const result = await baseQuery(args, api, extraOptions);

  //     if (result.error) {
  //       const { status, data } = result.error;
  //       const error: ErrorResponse = {
  //         status,
  //         message: (data && data) || 'Something went wrong',
  //       };

  //       return { error };
  //     }

  //     return result;
  //   } catch (error) {
  //     const networkError: ErrorResponse = {
  //       message: 'Unable to connect. Please try again later.',
  //       status: 500,
  //     };
  //     return { error: networkError };
  //   }
  // },
  endpoints: (builder) => ({
    signup: builder.mutation<ISignupResponse, ISignupRequest>({
      query: (userData) => ({
        url: '/signup',
        method: 'POST',
        body: userData,
      }),
    }),
    login: builder.mutation<ILoginResponse, ILoginRequest>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useLogoutMutation } =
  authApi;
