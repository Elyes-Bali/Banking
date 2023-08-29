import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addquest = createAsyncThunk("addquest", async (quest) => {
    console.log(quest);
    try {
      let result = await axios.post("/api/question/save", quest);
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  });
  
  export const editquest = createAsyncThunk(
    "editquest",
    async ({ id, questionner }) => {
      try {
        let result = await axios.put(`/api/question/edite/${id}`, questionner);
        console.log(result.data);
        return result.data;
      } catch (error) {
        console.log(error);
      }
    }
  );
  ;
  
  
  export const getquest = createAsyncThunk("getquest", async () => {
    try {
      let result = await axios.get("/api/question/getallquest");
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const deletequest = createAsyncThunk(
    "deletequest",
    async ({id }) => {
      try {
        let result = await axios.delete(`/api/question/spquest/${id}`);
  
        console.log(result.data);
        return result.data;
      } catch (error) {
        console.log(error);
      }
    }
  );





const initialState = {
    quest: null,
    status: null,
    allquest: null,
  };


  export const questslice = createSlice({
    name: "quest",
    initialState,
    reducers: {},
    extraReducers: {
      [addquest.pending]: (state) => {
        state.status = "pending";
      },
      [addquest.fulfilled]: (state, action) => {
        state.status = "success";
        state.quest = action.payload.quest;
      },
      [addquest.rejected]: (state) => {
        state.status = "failed";
      },
  
      [editquest.pending]: (state) => {
        state.status = "pending";
      },
      [editquest.fulfilled]: (state, action) => {
        state.status = "success";
        state.quest = action.payload.quest;
      },
      [editquest.rejected]: (state) => {
        state.status = "failed";
      },
      [getquest.pending]: (state) => {
        state.status = "pending";
      },
      [getquest.fulfilled]: (state, action) => {
        state.status = "success";
        state.allquest = action.payload.result;
      },
      [getquest.rejected]: (state) => {
        state.status = "failed";
      },
  
      [deletequest.pending]: (state) => {
        state.status = "pending";
      },
      [deletequest.fulfilled]: (state, action) => {
        state.status = "success";
        state.quest = action.payload.quest;
      },
      [deletequest.rejected]: (state) => {
        state.status = "failed";
      },
    },
  });

  export default questslice.reducer;