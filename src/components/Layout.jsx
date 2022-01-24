import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        progressClassName="progressBar"
      />
    </div>
  );
}

export default Layout;
