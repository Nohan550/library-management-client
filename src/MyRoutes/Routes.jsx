import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../ErrorPage";
import HomePage from "../Components/HomePage/HomePage";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Secret from "../Secret/Secret";

import AddBook from "../Components/AddBook/AddBook";
import CategoryBooks from "../Components/CategoryBooks/CategoryBooks";
import AllBooks from "../Components/AllBooks/AllBooks";
import Update from "../Components/Update/Update";
import Details from "../Components/Details/Details";
import Borrow from "../Components/Borrow/Borrow";




  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<HomePage></HomePage>
        },
        {
          path:"add-book",
          element:<Secret><AddBook></AddBook></Secret>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"register",
          element:<Register></Register>
        },
        {
          path:'category/:category_name',
          element:<CategoryBooks></CategoryBooks>,
          loader:({params})=>fetch(`http://localhost:5500/category/${params.category_name}`)
        },
        {
          path:'all-books',
          element:<Secret><AllBooks></AllBooks></Secret>,
          loader:()=>fetch('http://localhost:5500/category/books')
        },
        {
          path:'update/:name',
          element:<Secret><Update></Update></Secret>,
          loader:({params})=>fetch(`http://localhost:5500/category/books/${params.name}`)
        },
     {
      path:"category/:category_name/:name",
      element:<Secret><Details></Details></Secret>,
      loader:({params})=>fetch(`http://localhost:5500/category/books/${params.name}`)
     },
     {
      path:"borrowed-books",
      element:<Borrow></Borrow>,
      loader:()=>fetch('http://localhost:5500/borrowedBooks')
     }
      ]
    },
   
    
  ]);
 

export default routes;
