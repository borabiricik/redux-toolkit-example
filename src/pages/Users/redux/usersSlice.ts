import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import instance from "../../../core/services/axios"
import { GetUsersResponse, User } from "../types/users"
import { toast } from "react-toastify"

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get<GetUsersResponse>("/users")
      return data.users
    } catch (error) {
      return rejectWithValue("Something went wrong")
    }
  }
)

interface UsersState {
  users?: User[]
  isLoading: boolean
  error: string | null
}

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: null,
}

const usersSlice = createSlice({
  name: "users",
  reducers: {},
  initialState,
  extraReducers({ addCase }) {
    addCase(getUsers.pending, (state) => {
      state.isLoading = true
    })
    addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload
      state.isLoading = false
    }),
      addCase(getUsers.rejected, (state, action) => {
        toast.error(action.payload as string, { toastId: "get-users-error" })
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export default usersSlice.reducer
