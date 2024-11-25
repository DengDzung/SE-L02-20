import Home from "../pages/home/Home";
import LoginSV from "../pages/loginSV/Login";
import Profile from "../pages/profile/Profile";
import Printer from "../pages/printer/Printer";
import History from "../pages/history/History";
import PrinterInfo from "../pages/printerInfo/PrinterInfo";
import MainLayout from "../layouts/MainLayout/MainLayout";
import LoginAdmin from "../pages/loginAdmin/Login";
import Printing from "../pages/printing/Printing";
import Dashboard from "../pages/dashboard/Dashboard";
import PrintingLogs from "../pages/printingLogs/PrintingLogs";
import ManagePrinter from "../pages/managePrinter/ManagePrinter";
import ManageStudent from "../pages/manageStudent/ManageStudent";
const routers = [
  {
    path: "/",
    component: Home,
    layout: MainLayout,
  },
  {
    path: "/profile",
    component: Profile,
    layout: MainLayout,
  },
  {
    path: "/printer",
    component: Printer,
    layout: MainLayout,
  },
  {
    path: "/history",
    component: History,
    layout: MainLayout,
  },
  {
    path: "/loginSV",
    component: LoginSV,
    layout: null,
  },
  {
    path: "/loginAdmin",
    component: LoginAdmin,
    layout: null,
  },
  {
    path: "/printerInfo",
    component: PrinterInfo,
    layout: MainLayout,
  },
  {
    path: "/printing",
    component: Printing,
    layout: MainLayout,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    layout: MainLayout,
  },
  {
    path: "/printing-logs",
    component: PrintingLogs,
    layout: MainLayout,
  },
  {
    path: "/printer-management",
    component: ManagePrinter,
    layout: MainLayout,
  },
  {
    path: "/configuration",
    component: ManageStudent,
    layout: MainLayout,
  },
];
export default routers;
