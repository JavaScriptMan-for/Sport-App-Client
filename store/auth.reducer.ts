import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthStateType } from '../types/states.types';

    const initialState: AuthStateType = {
        isAuth: false,
        email: null,
        image_base64: null
    };

  const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
       setIsAuth(state, actions: PayloadAction<boolean>) {
        state.isAuth = actions.payload
       },
       setStateEmail(state, action: PayloadAction<string>) {
        state.email = action.payload
       },
       setImageBase64(state, action: PayloadAction<string | null>) {
        state.image_base64 = action.payload
       }
    },
     });

export const { setIsAuth, setStateEmail, setImageBase64 } = auth.actions;

export default auth.reducer;