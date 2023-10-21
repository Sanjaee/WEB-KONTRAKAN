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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
