import { API_BASE_URL } from '@/constants/env';
import { IBookingRequest, IBookingResponse } from '@/types/bookingTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
  }),
});

export const { useGetAllBookingsQuery, useCreateBookingMutation } = bookingApi;

export default bookingApi;
