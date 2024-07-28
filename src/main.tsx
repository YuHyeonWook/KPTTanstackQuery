import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./theme.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart.tsx";
import Home from "./pages/Home.tsx";
import SignUp from "./pages/SignUp.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <RouterProvider router={router} />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
);
