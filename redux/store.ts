import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/authApi';
import { hotelApi } from './api/hotelApi';
import { userApi } from './api/userApi';
import { roomApi } from './api/roomApi';
import bookingApi from './api/bookingApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [hotelApi.reducerPath]: hotelApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [roomApi.reducerPath]: roomApi.reducer,
    [bookingApi.reducerPath]: bookingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(hotelApi.middleware)
      .concat(userApi.middleware)
      .concat(roomApi.middleware)
      .concat(bookingApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
