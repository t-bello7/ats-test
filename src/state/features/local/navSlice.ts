import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: number
}
const initialState : CounterState = {
    value: 0,
}
export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {}
})

export default navSlice.reducer;