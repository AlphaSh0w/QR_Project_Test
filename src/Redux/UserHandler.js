import { createSlice } from "@reduxjs/toolkit";

export const userHandlerSlice = createSlice({
    name: "userHandler",
    initialState: {
        loggedIn: false,
        userData: {
            accessToken : null,
            id: null,
            fname: null,
            lname: null,
            username: null,
            email: null,
            avatar: null
        }
        
    },
    reducers : {
        setLoggedIn: (state, action) => {
            state.loggedIn = action.payload;
        },
        setUserData: (state, action) => {
            state.userData = action.payload;
        }
    }
});

export const {setUsername, setPassword} = userHandlerSlice.actions;

export default userHandlerSlice.reducer;