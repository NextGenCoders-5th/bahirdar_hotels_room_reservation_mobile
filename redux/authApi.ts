import {
  ILoginRequest,
  ILoginResponse,
  ISignupRequest,
  ISignupResponse,
} from '@/types/authTypes';
import { ErrorResponse } from '@/types/general';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://192.168.43.41:5000/api/v1/auth';

export const authApi = createApi({
  reducerPath: 'authApi',
  // baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  baseQuery: async (args, api, extraOptions) => {
    const baseQuery = fetchBaseQuery({
      baseUrl: BASE_URL,
    });

    try {
      const result = await baseQuery(args, api, extraOptions);

      if (result.error) {
        const { status, data } = result.error;
        const error: ErrorResponse = {
          status,
          message: (data && data) || 'Something went wrong',
        };

        return { error };
      }

      return result;
    } catch (error) {
      const networkError: ErrorResponse = {
        message: 'Unable to connect. Please try again later.',
        status: 500,
      };
      return { error: networkError };
    }
  },
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
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
