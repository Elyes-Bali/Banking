import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addform = createAsyncThunk("addform", async (form) => {
  console.log(form);
  try {
    let result = await axios.post("/api/formulaire/save", form);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

export const editform = createAsyncThunk(
  "editform",
  async ({ formulaire2, id }) => {
    console.log(formulaire2);
    console.log(id);
    try {
      let result = await axios.put(`/api/formulaire/edite/${id}`, formulaire2);

      console.log(result.data);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getform = createAsyncThunk("getform", async () => {
  try {
    let result = await axios.get("/api/formulaire/getallformule");
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  form: null,
  status: null,
  allforms: null,
};

export const formslice = createSlice({
  name: "form",
  initialState,
  reducers: {},
  extraReducers: {
    [addform.pending]: (state) => {
      state.status = "pending";
    },
    [addform.fulfilled]: (state, action) => {
      state.status = "success";
      state.form = action.payload.form;
    },
    [addform.rejected]: (state) => {
      state.status = "failed";
    },

    [editform.pending]: (state) => {
      state.status = "pending";
    },
    [editform.fulfilled]: (state, action) => {
      state.status = "success";
      state.form = action.payload.form;
    },
    [editform.rejected]: (state) => {
      state.status = "failed";
    },
    [getform.pending]: (state) => {
      state.status = "pending";
    },
    [getform.fulfilled]: (state, action) => {
      state.status = "success";
      state.allforms = action.payload.result;
    },
    [getform.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default formslice.reducer;
