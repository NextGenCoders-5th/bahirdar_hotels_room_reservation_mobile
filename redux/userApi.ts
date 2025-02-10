import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '@/constants/env';
import { IUserResponse } from '@/types/userTypes';

const USER_BASE_URL = `${API_BASE_URL}/users`;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: USER_BASE_URL, credentials: 'include' }),

  endpoints: (builder) => ({
    updateUser: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),

    getUserWithBookings: builder.query({
      query: (id) => ({
        url: '/user-with-bookings',
        params: { id },
      }),
    }),

    completeOnboarding: builder.mutation({
      query: (onboardingData) => ({
        url: '/complete-onboarding',
        method: 'POST',
        body: onboardingData,
      }),
    }),
    getCurrentUser: builder.query<IUserResponse, void>({
      query: () => '/current-user',
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetUserWithBookingsQuery,
  useCompleteOnboardingMutation,
} = userApi;
