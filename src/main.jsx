import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./app.css";
import { RouterProvider } from "react-router";
import routes from "./Routes/Routes";
import { ToastContainer, Zoom } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Zoom}
    />
  </StrictMode>
);
