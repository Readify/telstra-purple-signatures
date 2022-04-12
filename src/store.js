import { configureStore } from '@reduxjs/toolkit';
import signatureReducer from './slice';

const store = configureStore({
  reducer: {
    signature: signatureReducer,
  },
});

export default store;
