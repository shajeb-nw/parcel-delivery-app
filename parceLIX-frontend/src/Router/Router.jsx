import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/Register/Signin";
import SignUp from "../Pages/Register/SignUp";
import BeARider from "../Pages/Barider/BeARider";
import ParcelSend from "../Pages/ParcelSend/ParcelSend";
import Converage from "../Pages/Coverage/Converage";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {index:true, Component: Home},
      { path:"bearider",element:<BeARider></BeARider>},
      {path:"parcelsend" , element:<ParcelSend></ParcelSend>},
      {path:"coverage" , element:<Converage></Converage>}
    ]
  },
  {
    path:"signin",
    element:<Signin></Signin>
  },
  {
    path:"signup",
    element:<SignUp></SignUp>
  },
]);
