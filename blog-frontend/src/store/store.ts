import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { persistReducer, persistStore } from 'redux-persist'
import  SessionStorage  from 'redux-persist/lib/storage/session'


const persistConfig = {
  key: 'root',
  storage: SessionStorage,
};

const rootReducer = combineReducers({
  user: userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
// TypeScript types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
