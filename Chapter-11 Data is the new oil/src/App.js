import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "../index.css";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

//Lazy loading import
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    //Make an API call and send userName and Passord
    const data = {
      name: "Naga Tarun",
    };
    setUserName(data.name);
  }, []);

  return (
    //Outside this context "Default User" is used
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      {/* Entire App uses the value={{ loggedInUser: userName }} i.e NagaTarun */}
      <div className="app">
        {/*
         But header is wrapped inside other context with user RNT, so RNT is used in header
        <UserContext.Provider value={{ loggedInUser: "RNT" }}>
          <Header />
        </UserContext.Provider>
         */}
         
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<h1>Loading.......</h1>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: <Grocery />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
