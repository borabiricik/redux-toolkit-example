import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import instance from "../../../core/services/axios"
import { GetUsersResponse, User } from "../types/users"
import { toast } from "react-toastify"

// action with no parameters
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

export const getSingleUser = createAsyncThunk(
  "users/getSingleUser",
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await instance.get<GetUsersResponse["users"][0]>(
        `/users/${id}`
      )
      return data
    } catch (error) {
      return rejectWithValue("Something went wrong")
    }
  }
)

interface UsersState {
  users?: User[]
  currentUser?: User | null
  isLoading: boolean
  error: string | null
}

const initialState: UsersState = {
  users: [],
  currentUser: null,
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
      }),
      addCase(getSingleUser.pending, (state) => {
        state.currentUser = null
        state.isLoading = true
      }),
      addCase(getSingleUser.fulfilled, (state, action) => {
        state.currentUser = action.payload
        state.isLoading = false
      }),
      addCase(getSingleUser.rejected, (state, action) => {
        toast.error(action.payload as string, {
          toastId: "get-single-user-error",
        })
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export default usersSlice.reducer
