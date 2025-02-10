import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '@/constants/env';
import { IRoomResponse } from '@/types/roomTypes';

const ROOMS_BASE_URL = `${API_BASE_URL}/rooms`;

export const roomApi = createApi({
  reducerPath: 'roomApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ROOMS_BASE_URL,
  }),

  endpoints: (builder) => ({
    getRoom: builder.query<IRoomResponse, string>({
      query: (roomId) => `/${roomId}`,
    }),
  }),
});

export const { useGetRoomQuery } = roomApi;
