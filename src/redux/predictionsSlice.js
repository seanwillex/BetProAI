import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  predictions: [],
  loading: false,
  error: null,
};

export const predictionsSlice = createSlice({
  name: 'predictions',
  initialState,
  reducers: {
    fetchPredictionsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPredictionsSuccess(state, action) {
      state.predictions = action.payload;
      state.loading = false;
    },
    fetchPredictionsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPredictionsStart, fetchPredictionsSuccess, fetchPredictionsFailure } = predictionsSlice.actions;

export default predictionsSlice.reducer;