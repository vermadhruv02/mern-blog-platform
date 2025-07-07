import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    isLoggedIn: boolean;
    user: {
        id?: string;
        fullName?: string;
        email?: string;
        username?: string;
        avatar?: string;
    };
}
const initialState: UserState = {
    isLoggedIn: false,
    user: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state , action: PayloadAction<UserState['user']>) => {
            const payload = action.payload;
            state.isLoggedIn = true;
            state.user = payload;
        },
        removeUser: (state ) => {
            state.isLoggedIn = false;
            state.user = {};
        }
    }
});


export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;