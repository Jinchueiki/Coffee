import {
    Link,
    RouterProvider,
    createBrowserRouter,
    useParams,
  } from "react-router-dom";
  import User from "../pages/User";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          hom screen
          <Link to={"/user/" + "You"}>aller au profile</Link>
        </div>
      ),
    },
    {
      path: "/map",
      element: <div>map screen</div>,
    },
    {
      path: "/profile",
      element: (
        <div>
          profile screen
          <Link to={"/map"} />
        </div>
      ),
    },
    {
      path: "/user/:name",
      element: <User />,
    },
  ]);
  export default function AppRouter() {
    return <RouterProvider router={router} />;
  }