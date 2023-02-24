import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store'

const initialState = {
    status: 'idle',
    data: [],
};


  export const addUser = createAsyncThunk(
    'user/addUser',
    async (userData) => {
        const response = await fetch('/users/',{
            method: 'post',
            body: JSON.stringify(userData)
        });
        const data = await response.json()
        // if (response.status < 200 || response.status >= 300) {
        //     // return rejectWithValue(data)
        // }
        return data;
    },
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(addUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addUser.fulfilled, (state, action:PayloadAction<[]>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(addUser.rejected, (state, action) => {
                state.status = 'failed';
            })
    }
})

export default userSlice.reducer;