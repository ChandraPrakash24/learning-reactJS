import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/HeaderComponent";
import BodyComponent from "./Components/BodyComponent";
import FooterComponent from "./Components/FooterComponent";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return(
    <>
      <HeaderComponent />
      <Outlet />
      {/* <BodyComponent /> */}
      <FooterComponent />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <BodyComponent />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter} />);