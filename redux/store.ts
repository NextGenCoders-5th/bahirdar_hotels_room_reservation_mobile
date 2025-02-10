import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './authApi';
import { hotelApi } from './hotelApi';
import { userApi } from './userApi';
import { roomApi } from './roomApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [hotelApi.reducerPath]: hotelApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [roomApi.reducerPath]: roomApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(hotelApi.middleware)
      .concat(userApi.middleware)
      .concat(roomApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
