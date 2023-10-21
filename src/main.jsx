import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom/dist/index.js";
import Home from "./App";
import Payment from "./PaymentGetway/Payment";
import GoogleMap from "./Components/Lokasi";
import AdminPanel from "./AdminPanel/AdminPanel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Payment",
    element: <Payment />,
  },
  {
    path: "/Lokasi",
    element: <GoogleMap />,
  },
  {
    path: "/ADMINNETWORK",
    element: <AdminPanel />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
