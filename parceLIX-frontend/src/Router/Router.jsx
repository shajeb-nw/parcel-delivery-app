import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/Register/Signin";
import SignUp from "../Pages/Register/SignUp";
import BeARider from "../Pages/Barider/BeARider";
import ParcelSend from "../Pages/ParcelSend/ParcelSend";
import Converage from "../Pages/Coverage/Converage";
import Deashbord from "../Layout/Deashbord";
import PageDeashbord from "../Pages/Deashbord/PageDeashbord/PageDeashbord";
import MyParcel from "../Pages/MyParcel/MyParcel";
import Payment from "../Pages/Deashbord/Payment/Payment";
import PaySuccess from "../Pages/Deashbord/Payment/PaySuccess";
import PayHistory from "../Pages/Deashbord/Payment/PayHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "bearider", element: <BeARider></BeARider> },
      { path: "parcelsend", element: <ParcelSend></ParcelSend> },
      { path: "coverage", element: <Converage></Converage> },
    ],
  },
  {
    path: "signin",
    element: <Signin></Signin>,
  },
  {
    path: "signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "deashbord",
    element: <Deashbord></Deashbord>,
    children: [
      { path: "/deashbord", element: <PageDeashbord></PageDeashbord> },
      { path: "/deashbord/parcelsend", element: <ParcelSend></ParcelSend> },
      { path: "/deashbord/myparcel", element: <MyParcel></MyParcel> },
      {path:"/deashbord/payment/:id" ,element:<Payment></Payment>},
      {path:"/deashbord/payment-success",element:<PaySuccess></PaySuccess>},
      {path:"/deashbord/payment-history",element:<PayHistory></PayHistory>}
    ],
  },
]);
