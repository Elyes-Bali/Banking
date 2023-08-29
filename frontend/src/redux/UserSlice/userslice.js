import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const registerUser = createAsyncThunk("register", async (user) => {
  try {
    let result = await axios.post(
      "/api/user/register",
      user
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});




export const loginUser = createAsyncThunk("login", async ({user} , {rejectWithValue}) => {
  try {
    const result = await axios.post("/api/user/login", user);
    // console.log(result.data.searchedUser);
    // const { navigate } = useNavigate();
    // const getAdmin=localStorage.getItem("isAdmin");
   
    // result.data.searchedUser.isAdmin && localStorage.setItem("isAdmin", result.data.searchedUser.isAdmin);
    // console.log(result.data.searchedUser);
    // if (result.data.searchedUser.role === "patient") {

      // setIsauth(true)
    //   navigate("/");
    //   window.location.reload();
    // }
    // if (result.data.searchedUser.isAdmin.toString()=="true" ) {
        
    //     // navigate("/dashboard");
    //     // window.location.reload();
    //   }
    return result.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.response.data);
   
  }
});

export const currentUser = createAsyncThunk("current", async () => {
  let opts = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    const result = await axios.get(
      "/api/user/auth",
      opts
    );
    return result.data;
    // console.log(result.data);
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  user: null,
  status: null,
  users: null,
  userDetail: null,
};

export const userslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout:(state,action)=>{
      localStorage.removeItem("token");
      localStorage.removeItem("isAdmin");
      state.user = null;
    }
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.status = "pending";
    },
    [loginUser.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload.searchedUser;
      localStorage.setItem("token", action.payload.token);
      // localStorage.setItem("isAdmin", action.payload.searchedUser.role);
      console.log(action.payload)
    },
    [loginUser.rejected]: (state) => {

      state.status = "fail";
    }, 

    [currentUser.pending]: (state) => {
      state.status = "pending";
    },
    [currentUser.fulfilled]: (state,action) => {
      state.status = "success";
      state.user = action.payload.user;
    },
    [currentUser.rejected]: (state) => {
      state.status = "failed";
    },

  },
});

export const {logout} = userslice.actions;
export default userslice.reducer;
