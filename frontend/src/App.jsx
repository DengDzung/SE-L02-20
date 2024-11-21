import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Printer from "./pages/printer/Printer";
import History from "./pages/history/History";

import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";

import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

function App() {
  const Layout = () => {
    const [isLeftbarVisible, setIsLeftbarVisible] = useState(true);

    const toggleLeftbar = () => {
      setIsLeftbarVisible((prev) => !prev);
    };

    return (
      <div>
        <Navbar toggleLeftbar={toggleLeftbar} />
        <div style={{ display: "flex" }}>
          <Leftbar isHidden={!isLeftbarVisible} />
          <div style={{ flex: 8 }}>
            <Outlet />
          </div>
        </div>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/printer",
          element: <Printer />,
        },
        {
          path: "/history",
          element: <History />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
