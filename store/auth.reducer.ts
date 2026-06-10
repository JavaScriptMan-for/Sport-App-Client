import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthStateType } from '../types/states.types';

    const initialState: AuthStateType = {
        isAuth: false
    };

  const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
       setIsAuth(state, actions: PayloadAction<boolean>) {
        state.isAuth = actions.payload
       }
    },
     });

export const { setIsAuth } = auth.actions;

export default auth.reducer;