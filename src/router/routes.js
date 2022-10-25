import { createBrowserRouter } from "react-router-dom";
import Courses from "../layout/pages/Courses";
import CoursesDeatiles from "../layout/pages/CoursesDeatiles";
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
                    element:<Courses></Courses>,
                    loader:()=>fetch("http://localhost:5000/coursesCategory")
                },
               {
                    path:'/registration',
                    element:<Registration></Registration>
                },
                
            ]
         }
])