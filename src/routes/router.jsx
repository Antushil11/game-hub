import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Homepage from "../Pages/Homepage";
import Newsletter from "../Pages/Newsletter";
import Games from "../Pages/Games";

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
//   {
//     path: "/auth",
//     element: <div>Authenticatio layout</div>,
//   },
//   {
//     path: "/games",
//     element: <div>Games layout</div>,
//   },
  {
    path: "/*",
    element: <div>Error 404</div>,
  },
]);

export default router;
