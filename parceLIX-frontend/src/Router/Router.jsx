import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/Register/Signin";
import SignUp from "../Pages/Register/SignUp";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {index:true, Component: Home}
    ]
  },
  {
    path:"signin",
    element:<Signin></Signin>
  },
  {
    path:"signup",
    element:<SignUp></SignUp>
  }
]);
