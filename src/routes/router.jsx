import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Homepage from "../Pages/Homepage";
import Newsletter from "../Pages/Newsletter";
import Games from "../Pages/Games";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../layout/AuthLayout";
import GameDetails from "../Pages/GameDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../Pages/Loading";
import ProfilePages from "../components/ProfilePages";
import ErrorPage from "../Pages/ErrorPage";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>,
        hydrateFallbackElement: (
          <Loading></Loading>
        ),
        loader: () => fetch("./furnitureData.json"),
      },
      {
        path: "/games",
        element: <Games></Games>,
      },
      {
        path: "/newsletter",
        element: <Newsletter></Newsletter>,
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path:"/contact",
        element: <Contact></Contact>
      }
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },

  {
    path: "/profile",
    element:<ProfilePages></ProfilePages>

  },
  {
    path: "/games-details/:id",
    element: (
      
        <GameDetails></GameDetails>
      
    ),
    loader: () => fetch("/furnitureData.json"),
    hydrateFallbackElement:<Loading></Loading>
  },
  {
    path: "/*",
    element:<ErrorPage></ErrorPage>
  },
]);

export default router;
