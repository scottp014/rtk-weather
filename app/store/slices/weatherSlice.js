import axios from "axios";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// API call for user entered city name, had trouble hiding my API key in .env so left it here for now
export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (location) => {
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=79a2d684772528c31363d342e6db9789`);
  return response.data;
  });


export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    locations: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.status = 'loading';
    })
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.locations.push(action.payload); // pushes data from API call into the empty locations array
      state.error = null;
    })
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.status = 'failed',
      state.error = action.error.message;
    });
  },
});

export default weatherSlice.reducer;