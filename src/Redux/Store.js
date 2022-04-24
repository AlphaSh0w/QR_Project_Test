import { configureStore } from "@reduxjs/toolkit";
import UserHandlerReducer from "./UserHandler";
export default configureStore({
    reducer : {
        user : UserHandlerReducer
    }
})