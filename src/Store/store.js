import { configureStore } from "@reduxjs/toolkit";
import helpdeskReducer from '../redux slices/helpdeskSlice'

export const store=configureStore({
    reducer:{
        helpdesk:helpdeskReducer,
    }
})