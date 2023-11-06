import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../ErrorPage";
import HomePage from "../Components/HomePage/HomePage";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Secret from "../Secret/Secret";
import AddBooks from "../Components/AddBooks/AddBooks";


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
          path:"add-books",
          element:<Secret><AddBooks></AddBooks></Secret>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"register",
          element:<Register></Register>
        }
      ]
    },
   
    
  ]);
 

export default routes;
