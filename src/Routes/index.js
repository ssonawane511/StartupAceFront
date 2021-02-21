/** @format */

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";

const Routes = [
  { path: "/login", exact: true, element: <Login /> },
  { path: "/signup", exact: true, element: <SignUp /> },
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "one", exact: true, element: <p>/one</p> },
      { path: "two", exact: true, element: <p>/two</p> },
      { path: "three", exact: true, element: <p>/three</p> },
    ],
  },
];

export default Routes;
