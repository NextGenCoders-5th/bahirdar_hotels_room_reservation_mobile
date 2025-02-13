import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  ILoginRequest,
  ILoginResponse,
  ISignupRequest,
  ISignupResponse,
} from '@/types/authTypes';
import { API_BASE_URL } from '@/constants/env';

const AUTH_BASE_URL = `${API_BASE_URL}/auth`;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: AUTH_BASE_URL, credentials: 'include' }),
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
      query: () => {
        return {
          url: '/logout',
          method: 'POST',
        };
      },
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useLogoutMutation } =
  authApi;
