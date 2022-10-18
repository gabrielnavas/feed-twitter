import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Feed from "./pages/Feed/Feed";
import SignUp from "./pages/User/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}