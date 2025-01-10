import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Booking {
  id: string;
  hotelId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

interface BookingsState {
  bookings: Booking[];
  isLoading: boolean;
  error: string | null;
}

const initialState: BookingsState = {
  bookings: [],
  isLoading: false,
  error: null,
};

export const fetchBookings = createAsyncThunk(
  'bookings/fetchBookings',
  async () => {
    // Implement actual API call here
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating API delay
    return [
      {
        id: '1',
        hotelId: '1',
        checkIn: '2023-06-01',
        checkOut: '2023-06-05',
        guests: 2,
      },
      {
        id: '2',
        hotelId: '2',
        checkIn: '2023-07-10',
        checkOut: '2023-07-15',
        guests: 3,
      },
    ];
  }
);

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookings = action.payload;
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default bookingsSlice.reducer;
