import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CommonService from "../../gateway/CommonService";

const initialState = {
    user: null, // Change user to null since it seems like you're expecting an object, not an array
    loading: false,
    error: null,
};

export const authUser = createAsyncThunk("userAuthentication", async (data) => {
    try {
        const response = await CommonService.createOrUpdate(data, "login");
        return response.data; // Return only the data property of the response
    } catch (error) {
        throw Error("Failed to fetch users");
    }
});

const authSlice = createSlice({
    name: "user-authentication",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(authUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(authUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload; // action.payload should now be the data property of the response
            })
            .addCase(authUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default authSlice.reducer;
