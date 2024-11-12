import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'; // Adjust the path accordingly

const store = configureStore({
    reducer: {
        auth: authSlice, // Use 'auth' as the key for clarity
    },
    // Optional: You can add middleware here if needed
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware),
});

// Optional: If you want to set up listeners or perform other store enhancements, you can do that here

export default store;