import { API_BASE_URL } from '@/constants/env';
import { IHotelsResponse } from '@/types/hotelTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { createApi, fetchBaseQuery } from '@redu';

const RECOMMENDATIONS_BASE_URL = `${API_BASE_URL}/recommendations`;

export const recommendationsApi = createApi({
  reducerPath: 'recommendationsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: RECOMMENDATIONS_BASE_URL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getPersonalRecommendations: builder.query<IHotelsResponse, void>({
      query: () => '/personal-recommendations',
    }),
    getPopularHotels: builder.query<IHotelsResponse, void>({
      query: () => '/popular-hotels',
    }),
  }),
});

export const { useGetPersonalRecommendationsQuery, useGetPopularHotelsQuery } =
  recommendationsApi;
