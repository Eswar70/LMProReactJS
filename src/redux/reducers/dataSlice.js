import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDashboardData = createAsyncThunk(
  'data/fetchDashboardData',
  async () => {
    const [activityRes, salesRes, demoRes, feedRes] = await Promise.all([
      fetch('/mock/userActivity.json'),
      fetch('/mock/sales.json'),
      fetch('/mock/demographics.json'),
      fetch('/mock/activity.json'),
    ]);

    return {
      userActivity: await activityRes.json(),
      salesData: await salesRes.json(),
      demographics: await demoRes.json(),
      activityFeed: await feedRes.json(),
    };
  }
);

const initialState = {
  userActivity: [],
  salesData: [],
  demographics: [],
  activityFeed: [],
  loading: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.loading = false;
        state.userActivity = action.payload.userActivity;
        state.salesData = action.payload.salesData;
        state.demographics = action.payload.demographics;
        state.activityFeed = action.payload.activityFeed;
      })
      .addCase(fetchDashboardData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default dataSlice.reducer;
