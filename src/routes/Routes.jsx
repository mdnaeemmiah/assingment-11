import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddBooks from "../Pages/AddBooks";
import AllBooks from "../Pages/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks";
import ErrorPage from "../Pages/ErrorPage";
import BookDetails from "../Components/Home/BookDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/addBook/:id',
            element:<AddBooks></AddBooks>
        },
        {
            path:'/all-books',
            element:<AllBooks></AllBooks>
        },
        {
            path:'/borrowed',
            element:<BorrowedBooks></BorrowedBooks>
        },
        {
            path:'/book/:id',
            element:<BookDetails></BookDetails>
        },
      ]
    },
  ]);
  export default router