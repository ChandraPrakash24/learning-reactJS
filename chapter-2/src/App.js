import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/HeaderComponent";
import BodyComponent from "./Components/BodyComponent";
import FooterComponent from "./Components/FooterComponent";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurentMenu from "./Components/RestaurentMenu";
import Profile from "./Components/Profile";
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
        element: <About />,
        children:[
          {
            path: "profile",
            element: <Profile />
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurent/:id",
        element: <RestaurentMenu />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter} />);