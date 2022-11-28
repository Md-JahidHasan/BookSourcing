import { createBrowserRouter } from "react-router-dom";
import DashbordLayout from "../../Layout/DashbordLayout";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
// import Appoinment from "../../Pages/Appoinment/Appoinment/Appoinment";
import CategoryWiseBooks from "../../Pages/CategoryWiseBooks/CategoryWiseBooks";
import AddAProduct from "../../Pages/DashBoard/AddAProduct/AddAProduct";
import AllBuyers from "../../Pages/DashBoard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/DashBoard/AllSellers/AllSellers";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import DashBoard from "../../Pages/DashBoard/Dashboard/DashBoard";
import MyBuyers from "../../Pages/DashBoard/MyBuyers/MyBuyers";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../../Pages/DashBoard/MyProducts/MyProducts";
import Payment from "../../Pages/DashBoard/Payment/Payment";
import ReportedItems from "../../Pages/DashBoard/ReportedItems/ReportedItems";

import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<DisplayError></DisplayError>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/category/:name',
                element:<CategoryWiseBooks></CategoryWiseBooks>,
                loader: ({params}) => fetch(`https://twelfth-assignment-server.vercel.app/category/${params.name}`)
            }
        ]
    },
    {
        path:'/dashboard',
        element: <PrivateRoute><DashbordLayout></DashbordLayout></PrivateRoute>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            {
                path:'/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            },
            {
                path:'/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard/allSellers',
                element: <AllSellers></AllSellers>
            },
            {
                path:'/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path:'/dashboard/reportedItems',
                element: <ReportedItems></ReportedItems>
            },
            {
                path:'/dashboard/addAProduct',
                element: <AddAProduct></AddAProduct>
            },
            {
                path:'/dashboard/myProducts',
                element: <MyProducts></MyProducts>
            },
            {
                path:'/dashboard/myBuyers',
                element: <MyBuyers></MyBuyers>
            },
            {
                path:'/dashboard/payment/:id',
                element: <AdminRoute><Payment></Payment></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/booking/${params.id}`)
            }
        ]
    }
])

export default router;