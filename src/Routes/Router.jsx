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
import ApproveRider from "../Pages/Dashboard/RiderApproval/ApproveRider";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute";
import AssignRider from "../Pages/Dashboard/AssignRider/AssignRider";
import AssignedDeliveries from "../Pages/Dashboard/AssignedDeliveries/AssignedDeliveries";
import RiderRoute from "./RiderRoute";
import CompleteDeliveries from "../Pages/Dashboard/CompleteDeliveries/CompleteDeliveries";
import TrackParcel from "../Pages/TrackParcel/TrackParcel";


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
               element: <PrivateRouter><BeaRider /></PrivateRouter>,
               loader: ()=> fetch('/public/warehouses.json').then((res)=>res.json())
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
            },
            {
                path:'/track-parcel/:trackingId',
                Component: TrackParcel
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
            },
            // Rider Only Route
            {
                 path:'/dashboard/assigned-deliveries',
                 element: <RiderRoute><AssignedDeliveries /></RiderRoute>
            },
            {
                path:'/dashboard/completed-deliveries',
                element:<RiderRoute><CompleteDeliveries /></RiderRoute>
            },

            // Admin Only Route
            {
                path:'/dashboard/approve-rider',
                element: <AdminRoute><ApproveRider /></AdminRoute>
            },
            {
                path:'/dashboard/manage-users',
                 element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path:'/dashboard/assign-rider',
                 element: <AdminRoute><AssignRider/></AdminRoute>
            },

        ]
    }
])