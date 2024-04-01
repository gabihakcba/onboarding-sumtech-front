import axios from "axios";
import { User, UserCreate } from "../types";

export const createUser = async (user: UserCreate) => {
  const response = await axios.post<User>("http://localhost:5000/users", user);
  return response.data;
};
