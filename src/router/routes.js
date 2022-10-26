import { createBrowserRouter } from "react-router-dom";
import Courses from "../layout/pages/Courses";
import CoursesDeatiles from "../layout/pages/CoursesDeatiles";
import Login from "../layout/pages/Login";
import Home from "../layout/pages/Home";
import Registration from "../layout/pages/Registration";
import Main from "../Main/Main";

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
        path: "/courses/:id",
        element: <Courses></Courses>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
     {
        path: "/log in",
        element: <Login></Login>,
      },

      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {},
    ],
  },
]);
