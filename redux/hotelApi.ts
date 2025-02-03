import { API_BASE_URL } from '@env';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IHotel, IHotelResponse, IHotelsResponse } from '@/types/hotelTypes';

const HOTELS_BASE_URL = `${API_BASE_URL}/hotels`;

export const hotelApi = createApi({
  reducerPath: 'hotelApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${HOTELS_BASE_URL}/`,
  }),
  endpoints: (builder) => ({
    getHotels: builder.query<IHotelsResponse, void>({
      query: () => '/',
    }),
    getHotelById: builder.query<IHotelResponse, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetHotelsQuery, useGetHotelByIdQuery } = hotelApi;
