import { configureStore } from '@reduxjs/toolkit'
import AddtofavSlice from './features/AddtofavSlice'

// ...

export const store = configureStore({
  reducer:{
    fav : AddtofavSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch