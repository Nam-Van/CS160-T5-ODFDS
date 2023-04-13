import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Register from "./webpages/Register"
import Login from "./webpages/Login"
import Home from "./webpages/Home"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Order from "./webpages/Order";
import RestaurantNav from "./components/RestaurantNav";
import DriverNav from "./components/DriverNav";
import "./style.scss";

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
}
const RestaurantLayout = () => {
  return (
    <>
      <RestaurantNav/>
      <Outlet/>
      <Footer/>
    </>
  );
}

const DriverLayout = () => {
  return (
    <>
      <DriverNav/>
      <Outlet/>
      <Footer/>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/order/:id",
        element:<Order/>
      },

    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
      <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
