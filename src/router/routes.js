import { createBrowserRouter } from "react-router-dom";
import Courses from "../layout/pages/Courses";
import Home from "../layout/pages/Home";
import Registration from "../layout/pages/Registration";
import Main from "../Main/Main";

export const router=createBrowserRouter([
         {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/courses',
                    element:<Courses></Courses>
                },
                {
                    path:'/registration',
                    element:<Registration></Registration>
                }
            ]
         }
])