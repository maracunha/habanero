import { configureStore } from '@reduxjs/toolkit';
import { api } from './services/api';
import auth from './services/authSlice';

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
