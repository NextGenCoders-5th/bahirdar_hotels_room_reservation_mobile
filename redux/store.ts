import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './authApi';
import { hotelApi } from './hotelApi';
import { userApi } from './userApi';
import { roomApi } from './roomApi';
import bookingApi from './bookingApi';

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
