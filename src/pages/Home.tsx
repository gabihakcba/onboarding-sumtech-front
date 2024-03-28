import React, { ReactElement } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const getUser = async (id: number): Promise<Response> => {
  return await axios.get(`http://localhost:5000/users/${id}`);
};

export default function Home(): ReactElement {
  const [user, setUser] = useState<object>({});

  useEffect(() => {
    getUser(5).then((response) => {
      console.log(response);
      setUser(response.data);
    });
  }, []);

  return (
    <div>
      Home
      {JSON.stringify(user)}
    </div>
  );
}
