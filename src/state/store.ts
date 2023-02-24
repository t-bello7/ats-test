import { configureStore } from "@reduxjs/toolkit";
import navReducer from './features/local/navSlice';
import formReducer from './features/local/formSlice';

export const store = configureStore({
    reducer: {
        nav: navReducer,
        form: formReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch