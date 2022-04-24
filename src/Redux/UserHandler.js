import { createSlice } from "@reduxjs/toolkit";

export const userHandlerSlice = createSlice({
    name: "userHandler",
    initialState: {
        accessToken : null,
        id: null,
        fname: null,
        lname: null,
        username: null,
        email: null,
        avatar: null
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