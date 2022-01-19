// this is a sample home page
// TODO: header, footer, menubars etc.
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { UserStore } from "../../store/userStore";

export default function Home() {
  const userName = UserStore.useState((s) => s.name);

  return (
    <div>
      <h1 style={{ padding: "1rem 0", paddingLeft: "10px" }}>
        Welcome {userName} to Mo's Fruit & Veg service!
      </h1>
      <hr
        style={{
          borderBottom: "solid 2px green"
        }}
      />
      <div>
        <nav
          style={{
            background: "#eeeeee"
          }}
        >
          <Link to="/home/customers">Manage Customers</Link> |{" "}
          <Link to="/home/products">Manage Products</Link> |{" "}
          <Link to="/">Log out</Link>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
