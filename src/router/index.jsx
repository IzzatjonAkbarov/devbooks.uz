import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../shared/Layouts/MainLayout";

import AuthLayout from "../shared/Layouts/AuthLayout";

import SignInPage from "../pages/Authorization/SignInPage";
import LoginPage from "../pages/Authorization/LoginPage";
import UserLayout from "../shared/Layouts/UserLayout";
import ProfilePage from "../pages/User/ProfilePage";
import SecurityPage from "../pages/User/SecurityPage";
import SettingsPage from "../pages/User/SettingsPage";
import HomePage from "../pages/Main/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
    ],
  },
  {
    path: "/authorization",
    element: <AuthLayout />,
    children: [
      {
        path: "/authorization/login-page",
        Component: LoginPage,
      },
      {
        path: "/authorization/signin-page",
        Component: SignInPage,
      },
    ],
  },
  {
    path: "/user-page",
    element: <UserLayout />,
    children: [
      {
        path: "/user-page/profile-page",
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
