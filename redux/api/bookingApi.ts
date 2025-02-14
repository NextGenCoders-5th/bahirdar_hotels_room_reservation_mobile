import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '@/constants/env';
import {
  AllUserBookingsResponse,
  IBookingRequest,
  IBookingResponse,
} from '@/types/bookingTypes';

const BOOKING_BASE_URL = `${API_BASE_URL}/bookings`;

const bookingApi = createApi({
  reducerPath: 'bookingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BOOKING_BASE_URL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getAllBookings: builder.query({
      query: () => ({
        url: '/',
        method: 'GET',
      }),
    }),
    createBooking: builder.mutation<IBookingResponse, IBookingRequest>({
      query: (bookingData) => ({
        url: '/',
        method: 'POST',
        body: bookingData,
      }),
    }),
    getAllUserBookings: builder.query<AllUserBookingsResponse, string>({
      query: (id) => `/all-bookings-of-a-user/${id}`,
    }),
  }),
});

export const {
  useGetAllBookingsQuery,
  useCreateBookingMutation,
  useGetAllUserBookingsQuery,
} = bookingApi;

export default bookingApi;
