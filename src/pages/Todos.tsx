import React, { ReactElement, useEffect, useState } from "react";

export default function Todos(): ReactElement {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([
    {
      completed: false,
      description: "una breve descripcion de mi persona 1",
      name: "cuarteto de nos 1",
      id: 1,
    },
    {
      completed: true,
      description: "una breve descripcion de mi persona 2",
      name: "cuarteto de nos 2",
      id: 2,
    },
    {
      completed: false,
      description: "una breve descripcion de mi persona 3",
      name: "cuarteto de nos 3",
      id: 3,
    },
    {
      completed: true,
      description: "una breve descripcion de mi persona 4",
      name: "cuarteto de nos 4",
      id: 4,
    },
  ]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(JSON.parse(user));

    // peticion get a los todos del usuario
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>
            <h2>{todo.name}</h2>
            <p>{todo.description}</p>
            <input type="checkbox" defaultChecked={todo.completed} />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
