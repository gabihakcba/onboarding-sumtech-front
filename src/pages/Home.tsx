import React, { ReactElement } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { createUser } from "../services/users";
import { UserCreate } from "../types";
import { FieldValues } from "../../node_modules/react-hook-form/dist/types/fields.js";

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
      Home
      {/* {JSON.stringify(user)} */}
      <form
        action=""
        id="createUser"
        onSubmit={handleSubmit(async (data: FieldValues) => {
          await createUser(data as UserCreate);
        })}
      >
        <label htmlFor="">Nombre de usuario</label>
        <input
          {...register("name", {
            required: {
              value: true,
              message: "El nombre de usuario es requerido",
            },
          })}
          type="text"
          form="createUser"
        />
        {errors?.name && (
          <span style={{ color: "red" }}>{errors.name?.message as string}</span>
        )}
        <label htmlFor="">E-mail</label>
        <input
          {...register("email", {
            required: {
              value: true,
              message: "El email es requerido",
            },
          })}
          type="email"
          form="createUser"
        />
        {errors?.username && (
          <span style={{ color: "red" }}>
            {errors.username?.message as string}
          </span>
        )}
        <button type="submit" form="createUser">
          Enviar
        </button>
      </form>
    </div>
  );
}
