import axios from "axios";
import React, { ReactElement } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { createUser } from "../services/users";
import { UserCreate } from "../types";

export default function LoginForm(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <form
        id="user"
        onSubmit={handleSubmit(async (data: FieldValues) => {
          const response = await createUser(data as UserCreate);
          console.log(response);
        })}
      >
        <div>
          <label>Nombre</label>
          <input
            form="user"
            type="text"
            {...register("name", {
              required: { value: true, message: "Campo requerido" },
              minLength: {
                value: 3,
                message: "Debe tener al menos 3 caracteres",
              },
            })}
          />
          {errors?.name && (
            <span style={{ color: "red" }}>
              {errors.name.message as string}
            </span>
          )}
        </div>
        <div>
          <label>Email</label>
          <input
            form="user"
            type="email"
            {...register("email", {
              required: { value: true, message: "Campo requerido" },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Debe ser un email valido",
              },
            })}
          />
          {errors?.email && (
            <span style={{ color: "red" }}>
              {errors.email.message as string}
            </span>
          )}
        </div>
        <button type="submit">crear</button>
      </form>
    </div>
  );
}
