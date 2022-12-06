import React from "react";
import Navbar from "./Navbar/Navbar.js";
import Footer from "./Footer/Footer.js";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
