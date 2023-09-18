import { createBrowserRouter, RouterProvider, Link   } from "react-router-dom";
import {React, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home/Home.jsx";
import Shop from "./Pages/Shop/Shop.jsx";
import ProductPage from "./Pages/Product/ProductPage.jsx";
import Rules from "./Pages/Rules/Rules.jsx";
import "./index.css";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: '/rules',
		element: window.location.href = '/rules.pdf',
	  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
