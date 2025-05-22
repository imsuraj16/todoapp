import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import Context from "./context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <Context>
        <App />
        <ToastContainer position="top-center" />
      </Context>
    </>
  </StrictMode>
);
