import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom/dist/index.js";
import Home from "./App";

import GoogleMap from "./Components/Lokasi";

import KontrakanCard from "./Components/About";
import DetailKontrakan from "./Components/DetailKontrakan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Payment/:id",
    element: <DetailKontrakan />,
  },
  {
    path: "/Lokasi",
    element: <GoogleMap />,
  },

  {
    path: "/About",
    element: <KontrakanCard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
