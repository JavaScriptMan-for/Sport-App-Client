import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStateType } from '../types/states.types';
import { IAuthData } from '../types/auth_data.type';

    const initialState: AppStateType = {
        finalNumber: null,
        auth_data: null
    };

  const app = createSlice({
    name: 'app',
    initialState,
    reducers: {
       setFinalNumber(state, actions: PayloadAction<number | null>) {
        state.finalNumber = actions.payload
       },
       setAuthData(state, action: PayloadAction<IAuthData | null>) {
        state.auth_data = action.payload
       }
    },
     });

export const { setFinalNumber, setAuthData } = app.actions;

export default app.reducer;