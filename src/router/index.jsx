import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../shared/Layouts/MainLayout";

import AuthLayout from "../shared/Layouts/AuthLayout";

import SignInPage from "../pages/Authorization/SignInPage";
import LoginPage from "../pages/Authorization/SignUpPage";
import UserLayout from "../shared/Layouts/UserLayout";
import ProfilePage from "../pages/User/ProfilePage";

import SettingsPage from "../pages/User/SettingsPage";
import HomePage from "../pages/Main/HomePage";

import Jadidlar from "../pages/Main/HomePage/Jadidlar";
import TemuriylarDavri from "../pages/Main/HomePage/TemuriylarDavri";
import SovetDavri from "../pages/Main/HomePage/SovetDavri";
import MustaqillikDavri from "../pages/Main/HomePage/MustaqillikDavri";
import SingleWriterInfo from "../Components/SingleWriterInfo";
import Kitoblar from "../pages/Main/HomePage/Kitoblar";
import SingleBook from "../Components/SingleBook";
import SignUp from "../pages/Authorization/SignUpPage";
import SecurityPage from "../../src/pages/User/SecurityPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        Component: HomePage,
        children: [
          {
            path: "/temuriylardavri",

            Component: TemuriylarDavri,
          },
          {
            path: "/",

            Component: Jadidlar,
          },
          {
            path: "/sovetdavri",

            Component: SovetDavri,
          },
          {
            path: "/mustaqillikdavri",

            Component: MustaqillikDavri,
          },

          {
            path: "/kitoblar",
            Component: Kitoblar,
          },
        ],
      },
      {
        path: "/writers/:id",
        Component: SingleWriterInfo,
      },
      {
        path: "/kitoblar/:id",
        Component: SingleBook,
      },
    ],
  },

  {
    path: "/authorization",
    element: <AuthLayout />,
    children: [
      {
        path: "/authorization/signup-page",
        Component: SignUp,
      },
      {
        path: "/authorization",
        Component: SignInPage,
      },
    ],
  },
  {
    path: "/user-page",
    element: <UserLayout />,
    children: [
      {
        path: "/user-page",
        Component: ProfilePage,
      },
      {
        path: "/user-page/security-page",
        Component: SecurityPage,
      },
      {
        path: "/user-page/settings-page",
        Component: SettingsPage,
      },
    ],
  },
]);
