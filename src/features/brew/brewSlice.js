import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  worts: [
    {
      id: 0,
      name: 'wort0',
      tilt_color: 'color0',
      temp: 0,
      set_temp: 0,
      hysteresis: 0,
      specific_gravity: 'sg0',
      cooler_shelby_addr: 'csa0',
      heater_shelby_addr: 'hsa0',
      rssi: 'rssi0'
    },
    {
      id: 1,
      name: 'wort1',
      tilt_color: 'color1',
      temp: 1,
      set_temp: 1,
      hysteresis: 1,
      specific_gravity: 'sg1',
      cooler_shelby_addr: 'csa1',
      heater_shelby_addr: 'hsa1',
      rssi: 'rssi1'
    },
    {
      id: 2,
      name: 'wort2',
      tilt_color: 'color2',
      temp: 2,
      set_temp: 2,
      hysteresis: 2,
      specific_gravity: 'sg2',
      cooler_shelby_addr: 'csa2',
      heater_shelby_addr: 'hsa2',
      rssi: 'rssi2'
    },
    {
      id: 3,
      name: 'wort3',
      tilt_color: 'color3',
      temp: 3,
      set_temp: 3,
      hysteresis: 3,
      specific_gravity: 'sg3',
      cooler_shelby_addr: 'csa3',
      heater_shelby_addr: 'hsa3',
      rssi: 'rssi3'
    },
  ],
  chiller_shelby_addr: 'chiller_shelby'
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

// export const savePositionHttp = createAsyncThunk('/fence/savePosition', async position => {
//     const response = await fetch('/fence/save_position', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({position: position})
//     })
//     return response.json()
// })

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
  },
});

export const { updateWort } = brewSlice.actions;

export default brewSlice.reducer;
