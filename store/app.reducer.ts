import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStateType } from '../types/states.types';

    const initialState: AppStateType = {
        finalNumber: null
    };

  const app = createSlice({
    name: 'app',
    initialState,
    reducers: {
       setFinalNumber(state, actions: PayloadAction<number | null>) {
        state.finalNumber = actions.payload
       }
    },
     });

export const { setFinalNumber } = app.actions;

export default app.reducer;