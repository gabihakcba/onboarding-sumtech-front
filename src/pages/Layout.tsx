import React, { ReactElement } from "react";
import { Link, Outlet } from "react-router-dom";
export default function Layout(): ReactElement {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="login">Login</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
