import React, { ReactElement } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { getUser } from "../services/users";
import { useNavigate } from "react-router-dom";

export default function Login(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const nav = useNavigate();

  return (
    <div>
      <form
        id="user"
        onSubmit={handleSubmit(async (data: FieldValues) => {
          const user = await getUser(data.userId);
          if (!user) {
            alert("Usuario no encontrado");
          }

          localStorage.setItem("user", JSON.stringify(user));
          nav("/todos");
        })}
      >
        <div>
          <label>Id Usuario</label>
          <input
            form="user"
            type="text"
            {...register("userId", {
              required: { value: true, message: "Campo requerido" },
              minLength: {
                value: 5,
                message: "Debe tener al menos 5 caracteres",
              },
            })}
          />
          {errors?.userId && (
            <span style={{ color: "red" }}>
              {errors.userId.message as string}
            </span>
          )}
        </div>
        <button type="submit">Iniciar sesion</button>
      </form>
    </div>
  );
}
