import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  worts: [
    {
      id: 0,
      // name: 'wort0',
      // tilt_color: 'color0',
      // temp: 0,
      // set_temp: 0,
      // hysteresis: 0,
      // specific_gravity: 'sg0',
      // cooler_shelly_addr: 'csa0',
      // heater_shelly_addr: 'hsa0',
      // rssi: 'rssi0'
    },
    { id: 1, },
    { id: 2, },
    { id: 3, },
  ],
  chiller_shelly_addr: 'chiller_shelly'
};

export const saveState = () => (dispatch, getState) => {
    dispatch(saveStateThunk(getState()));
};

export const saveStateThunk = createAsyncThunk(
  'brew/saveState',
  async state => {
        const response = await fetch('/brew/save_state', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({state: state.brew})
    })
    return response.json()
  }
);

export const fetchState = createAsyncThunk('/brew/fetchState', async () => {
  const response = await fetch('/brew')
  return response.json()
})

export const brewSlice = createSlice({
  name: 'brew',
  initialState,
  reducers: {
    updateWort: (state, action) => {
      state.worts[action.payload.wort_id] = action.payload.wort
    },
  },
  extraReducers:{
    [saveState.fulfilled]: (state, action) => {
      console.log('saveState', action)
    },
    [fetchState.fulfilled]: (state, action) => {
      const fetchedState = action.payload
      for (let key of Object.keys(fetchedState)){state[key] = fetchedState[key]}
    },
  },
});

export const { updateWort } = brewSlice.actions;

export default brewSlice.reducer;
