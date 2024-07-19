import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Contact from "./components/Contact.tsx";
import TestPage from "./components/TestPage.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    { path: "/contact", element: <Contact /> },
  ],
  { basename: "/portfolio_v2" },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
