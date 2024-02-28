import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/HeaderComponent";
import BodyComponent from "./Components/BodyComponent";
import FooterComponent from "./Components/FooterComponent";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurentMenu from "./Components/RestaurentMenu";
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
      },
      {
        path: "/restaurent/:id",
        element: <RestaurentMenu />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter} />);

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId=67970&catalog_qa=undefined&submitAction=ENTER

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId=84070&catalog_qa=undefined&submitAction=ENTER