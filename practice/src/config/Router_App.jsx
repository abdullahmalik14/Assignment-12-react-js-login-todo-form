import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "../components/Login";
import { Public_Routes } from "./Public_routes";
import { Private_Routes } from "./Private_routes";
import TodoApp from "../components/Todo";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Define public routes */}
      <Route element={<Public_Routes />}>
        <Route path="login" element={<Login />} />
      </Route>

      {/* Define private routes */}
      <Route element={<Private_Routes />}>
        <Route path="" element={<TodoApp />} />
        {/* Add more private routes here */}
      </Route>
    </Route>
  )
);

export const Router_App = () => {
  return <RouterProvider router={router} />;
};