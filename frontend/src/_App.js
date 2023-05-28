import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import NotFoundPage from "./components/NotFoundPage";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/ProfileClass";
import Cart from "./components/Cart";
import Shimmer from "./components/Shimmer";
import ConfirmationPage from "./components/Modal";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
// import Mart from "./src/components/Instamart";
const Instamart = lazy(() => import("./components/Instamart"));
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Abhishek",
    email: "xyz@gmail.com",
  });
  return (
    <Provider store={store}>
      <userContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </Provider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />,
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/confirmation",
        element: <ConfirmationPage />,
      },
    ],
  },
]);
