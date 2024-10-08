import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Contact from "./components/Contact.tsx";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    { path: "/contact", element: <Contact /> },
  ],
  { basename: "/" },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
