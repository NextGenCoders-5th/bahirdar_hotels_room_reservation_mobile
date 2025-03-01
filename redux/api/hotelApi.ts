import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IHotelResponse, IHotelsResponse } from '@/types/hotelTypes';
import { API_BASE_URL } from '@/constants/env';

const HOTELS_BASE_URL = `${API_BASE_URL}/hotels`;

const HOTELS_TAG = 'hotels';

export const hotelApi = createApi({
  reducerPath: 'hotelApi',
  tagTypes: [HOTELS_TAG],
  baseQuery: fetchBaseQuery({
    baseUrl: HOTELS_BASE_URL,
  }),

  endpoints: (builder) => ({
    getHotels: builder.query<
      IHotelsResponse,
      { searchQuery?: string; avgRating?: number } | void
    >({
      query: ({ searchQuery, avgRating } = {}) => {
        const params = new URLSearchParams();
        if (searchQuery) params.append('search', searchQuery);
        if (avgRating) params.append('avgRating', avgRating.toString());
        return `/?${params.toString()}`;
      },
      providesTags: [HOTELS_TAG],
    }),
    getHotel: builder.query<IHotelResponse, string>({
      query: (id) => `/${id}`,
    }),
    getHotelWithRooms: builder.query<IHotelResponse, string>({
      query: (id) => `/with-rooms/${id}`,
    }),
  }),
});

export const {
  useGetHotelsQuery,
  useLazyGetHotelsQuery,
  useGetHotelQuery,
  useGetHotelWithRoomsQuery,
} = hotelApi;
