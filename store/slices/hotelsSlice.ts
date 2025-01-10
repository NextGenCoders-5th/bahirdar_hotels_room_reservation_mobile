import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Hotel {
  id: string;
  name: string;
  rating: number;
  price: number;
}

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
  // Implement actual API call here
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating API delay
  return [
    { id: '1', name: 'Hotel A', rating: 4.5, price: 100 },
    { id: '2', name: 'Hotel B', rating: 4.2, price: 80 },
    { id: '3', name: 'Hotel C', rating: 4.8, price: 120 },
  ];
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
