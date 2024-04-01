import React, { ReactElement } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { createUser } from "../services/users";
import { UserCreate } from "../types";
import { FieldValues } from "../../node_modules/react-hook-form/dist/types/fields.js";
import LoginForm from "../components/LoginForm.tsx";

const getUser = async (id: string): Promise<Response> => {
  return await axios.get(`http://localhost:5000/users/${id}`);
};

export default function Home(): ReactElement {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <div>
      <LoginForm></LoginForm>
    </div>
  );
}
