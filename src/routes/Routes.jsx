import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/',
            element:<Login></Login>
        },
        {
            path:'/',
            element:<Register></Register>
        },
      ]
    },
  ]);
  export default router