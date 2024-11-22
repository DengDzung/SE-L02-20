import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import Printer from "../pages/printer/Printer";
import History from "../pages/history/History";
import MainLayout from "../layouts/MainLayout/MainLayout";
const routers = [
  {
    path: "/",
    component: Home,
    layout: MainLayout
  },
  {
    path: "/profile",
    component: Profile,
    layout: MainLayout
  },
  {
    path: "/printer",
    component: Printer,
    layout: MainLayout
  },
  {
    path: "/history",
    component: History,
    layout: MainLayout
  },
  {
    path: "/login",
    component: Login,
    layout: MainLayout
  },
];
export default routers
