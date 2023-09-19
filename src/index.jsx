import { createBrowserRouter, RouterProvider, Link   } from "react-router-dom";
import {React, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home/Home.jsx";
import "./index.css";
import Rules from "./Pages/Rules/Rules.jsx";


const router = createBrowserRouter([
	{
		path: "/rules",
		element: <Rules/>,
	  },
	{
		path: "/",
		element: <Home />,
	}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);