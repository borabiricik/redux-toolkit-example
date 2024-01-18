import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import counterSlice from "../../pages/Home/redux/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})

// Redux toolkit types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
