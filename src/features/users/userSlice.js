import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, name: "Anas al-Abseh"},
    {id: 2, name: "Ahmad al-Absah"}
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    }
})

export default userSlice.reducer;
export const selectAllUsers = state => state.users