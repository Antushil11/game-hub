import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Homepage from "../Pages/Homepage";
import Newsletter from "../Pages/Newsletter";
import Games from "../Pages/Games";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../layout/AuthLayout";
import GameDetails from "../Pages/GameDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
        {
            index:true,
            element:<Homepage></Homepage>,
            hydrateFallbackElement: <p className="text-center"><span className="loading loading-dots loading-xl"></span></p>,
            loader: () => fetch('./furnitureData.json')
          
        },
        {
            path:"/games",
            element:<Games></Games>
          
        },
        {
           path:"/newsletter",
           element:<Newsletter></Newsletter>
        },
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path:"/auth/login",
        element:<Login></Login>
      },
      {
        path:"/auth/register",
        element:<Register></Register>
      },
    ]
  },
  {
    path: "/games-details/:id",
    element: <GameDetails></GameDetails>,
  },
  {
    path: "/*",
    element: <div className="flex justify-center items-center">Error 404</div>,
  },
]);

export default router;
