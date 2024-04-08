import axios from "axios";
import { User, UserCreate } from "../types";

export const createUser = async (user: UserCreate) => {
  const response = await axios.post<User>("http://localhost:5000/users", user);
  return response.data;
};

export const getUser = async (userId: string): Promise<User | null> => {
  try {
    const response = await axios.get<User>(
      `http://localhost:5000/users/${userId}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
