import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface AuthState {
  user: any | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }: { email: string; password: string }) => {
    // Implement actual API call here
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating API delay
    return { id: '1', email };
  }
);

export const signOut = createAsyncThunk('auth/signOut', async () => {
  // Implement actual API call here
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating API delay
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'An error occurred';
      })
      .addCase(signOut.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;
