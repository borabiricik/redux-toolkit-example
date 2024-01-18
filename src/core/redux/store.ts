import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import counterSlice from "../../pages/Home/redux/counterSlice"
import usersSlice from "../../pages/Users/redux/usersSlice"

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    users: usersSlice,
  },
})

// Redux toolkit types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
