import React, { Profiler, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/HeaderComponent";
import BodyComponent from "./Components/BodyComponent";
import FooterComponent from "./Components/FooterComponent";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurentMenu from "./Components/RestaurentMenu";
import Profile from "./Components/Profile";
import ProfileClass from "./Components/ProfileClass";
// import Instamart from "./Components/Instamart";
// import Shimmer from "./Components/ShimmerUI";
import MultipleShimmers from "./Components/MultipleShimmer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";


const Instamart = lazy(() => import("./Components/Instamart"));

const AppLayout = () => {
  return(
    <>
    <Provider store={appStore} > 
      <HeaderComponent />
      <Outlet />
      {/* <BodyComponent /> */}
      <FooterComponent />
    </Provider>
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
          },
          {
            path: "profile-class",
            element: <ProfileClass />
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
      },
      {
        path: "/instamart",
        element: <Suspense fallback={<MultipleShimmers />}><Instamart/></Suspense>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter} />);