import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";


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
    }
])