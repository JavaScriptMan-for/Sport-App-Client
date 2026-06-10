import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStateType } from '../types/states.types';

    const initialState: AppStateType = {
        
    };

  const app = createSlice({
    name: 'app',
    initialState,
    reducers: {
       
    },
     });

export const {  } = app.actions;

export default app.reducer;