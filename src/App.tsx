import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Feed from "./pages/Feed/Feed";
import SignUp from "./pages/User/Signup";
import SignUpConfirmationCode from "./pages/User/SignUpConfirmationCode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signup/confirmation",
    element: <SignUpConfirmationCode />,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}