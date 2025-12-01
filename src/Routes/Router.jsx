import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRouter from "./PrivateRouter";
import BeaRider from "../Pages/Rider/BeaRider";
import SendParcel from "../Pages/sendPercel/SendParcel";
import { DashboardLayout } from "../Layout/DashboardLayout";
import MyParcels from "../Pages/Dashboard/MyParcels/MyParcels";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";
import PaymentcanCeled from "../Pages/Dashboard/Payment/PaymentcanCeled";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";


export const router=createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
               path:'/rider',
               element: <PrivateRouter><BeaRider /></PrivateRouter>
            },
            {
              path:'/send-percel',
              element:<PrivateRouter><SendParcel /> </PrivateRouter>,
               loader: ()=> fetch('/public/warehouses.json').then((res)=>res.json())
            },
            {
                path:'/coverage',
                element:<Coverage />,
                loader: ()=> fetch('/public/warehouses.json').then((res)=>res.json())
            }
        ]
    },
    {
        path:'/',
        element:<AuthLayout />,
        children:[
            {
                path:'/login',
                Component: Login
            },
            {
                path:'/register',
                Component: Register
            }
        ]
    },
    {
        path:'/dashboard',
        element: <PrivateRouter><DashboardLayout /></PrivateRouter>,
        children:[
            {
                path:'/dashboard/my-parcels',
                Component: MyParcels
            },
            {
                path:'/dashboard/payment/:paymentId',
                Component: Payment
            },
            {
                path:'/dashboard/payment-success',
                Component: PaymentSuccess
            },
            {
                path:'/dashboard/payment-canceled',
                Component: PaymentcanCeled
            },
            {
                path:'/dashboard/payment-history',
                Component: PaymentHistory
            }

        ]
    }
])