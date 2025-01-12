import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Hotel } from '@/types/hotel';

interface HotelsState {
  hotels: Hotel[];
  isLoading: boolean;
  error: string | null;
}

const initialState: HotelsState = {
  hotels: [],
  isLoading: false,
  error: null,
};

export const fetchHotels = createAsyncThunk('hotels/fetchHotels', async () => {
  const response = await fetch('http://localhost:3000/hotels');
  if (!response.ok) {
    throw new Error('Failed to fetch hotels');
  }
  return response.json() as Promise<Hotel[]>;
});

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotels.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hotels = action.payload;
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default hotelsSlice.reducer;
