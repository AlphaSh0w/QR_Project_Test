import { createSlice } from "@reduxjs/toolkit";

export const userHandlerSlice = createSlice({
    name: "userHandler",
    initialState: {
        userName: "",
        password: ""
    },
    reducers : {
        setUsername: (state, action) => {
            state.userName = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        }
    }
});

export const {setUsername, setPassword} = userHandlerSlice.actions;

export default userHandlerSlice.reducer;