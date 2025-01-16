import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Hotel } from '@/types/hotel';
import axios from 'axios';

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
  try {
    const response = await fetch('http://localhost:3000/hotels');
    if (!response.ok) {
      throw new Error('Failed to fetch hotels');
    }
    const data = await response.json();
    return data as Hotel[];
  } catch (error) {
    console.error('Error fetching hotels:', error);
    throw error;
  }
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
