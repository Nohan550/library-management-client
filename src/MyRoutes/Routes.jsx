import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../ErrorPage";
import HomePage from "../Components/HomePage/HomePage";


  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<HomePage></HomePage>
        }
      ]
    },
  ]);
 

export default routes;
