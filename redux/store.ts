import { configureStore } from '@reduxjs/toolkit';

import { authApi } from './api/authApi';
import { hotelApi } from './api/hotelApi';
import { userApi } from './api/userApi';
import { roomApi } from './api/roomApi';
import bookingApi from './api/bookingApi';
import { recommendationsApi } from './api/recommendationsApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [hotelApi.reducerPath]: hotelApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [roomApi.reducerPath]: roomApi.reducer,
    [bookingApi.reducerPath]: bookingApi.reducer,
    [recommendationsApi.reducerPath]: recommendationsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(hotelApi.middleware)
      .concat(userApi.middleware)
      .concat(roomApi.middleware)
      .concat(bookingApi.middleware)
      .concat(recommendationsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
