import { createBrowserRouter } from "react-router-dom";
import Courses from "../layout/pages/Courses";
import Login from "../layout/pages/Login";
import Home from "../layout/pages/Home";
import Registration from "../layout/pages/Registration";
import Main from "../Main/Main";
import Question from "../layout/pages/Question";
import Privite from "./Privite";
import Found from "../layout/pages/Found";
import Leftside from "../layout/pages/Leftside";
import Course from "../layout/pages/Course";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
         path:'/coursesCategory',
         element:<Course></Course>,
         loader:()=>fetch('http://localhost:5000/coursesCategory')
      },
      {
        path: "/courses/:id",
        element: <Privite><Courses></Courses></Privite>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path:'/blog',
        element:<Question></Question>
      },
     {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
          path:'*',element:<Found></Found>
      }
      
    ],
  },
]);
