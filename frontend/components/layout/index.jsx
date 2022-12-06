import React from "react";
import Navbar from "./Navbar/Navbar.js";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <div>footer</div>
    </div>
  );
}

export default Layout;
