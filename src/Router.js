import {
  createBrowserRouter
} from "react-router-dom";

import Login from "./Components/Login"


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    //loader: rootLoader, // write a login loader if necessary
    // children: [
    //   {
    //     path: "team",
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },
]);

export default router;