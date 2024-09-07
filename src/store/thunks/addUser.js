import axios from "axios";
import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post("http://localhost:3005/users", {
    name: faker.name.fullName(),
  });
  return response.data;
});
