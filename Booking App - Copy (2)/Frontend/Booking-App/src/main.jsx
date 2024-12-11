import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllRooms from "./components/AllRooms.jsx";
import BookingComponent from "./components/BookingComponent.jsx";
import AuthForm from "./components/AuthForm.jsx";
import { UserProvider } from "./components/UserContext.jsx";
import GuestRoute from "./components/GuestRoute.jsx";
import OccupiedDatesDisplay from "./components/OccupiedDatesDisplay.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <BookingComponent></BookingComponent>,
      },
      {
        path: "/all-rooms",
        element: <AllRooms></AllRooms>,
      },
      {
        path: "/auth",
        element: (
          <GuestRoute>
            <AuthForm></AuthForm>
          </GuestRoute>
        ),
      },
      {
        path: "/my-bookings",
        element: <OccupiedDatesDisplay></OccupiedDatesDisplay>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);