import React from "react";

function Layout({ children }) {
  return (
    <div>
      <div>Navbar</div>
      <div>{children}</div>
      <div>footer</div>
    </div>
  );
}

export default Layout;
