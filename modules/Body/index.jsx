import React from "react";
import { Header, Footer } from "modules";

const Body = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
};
export default Body;
