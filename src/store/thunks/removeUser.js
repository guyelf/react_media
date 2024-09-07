import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("users/remove", async (user) => {
  // delete call returns an empty object
  await axios.delete(`http://localhost:3005/users/${user.id}`);

  // so here we return the user we wanted to delete, so we can delete it from the store too (not just the remote db)
  return user;
});

export { removeUser };
