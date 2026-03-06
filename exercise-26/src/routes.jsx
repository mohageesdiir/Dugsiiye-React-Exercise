import { createBrowserRouter } from "react-router";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import PostDetail from "./pages/PostDetail";

import ProtectedRoute from "./pages/ProtectedRoute";
import App from "./App";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "create",
        element: (
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        )
      },
      {
        path: "posts/:postId",
        element: <PostDetail />
      }
    ]
  }
]);

export default router;
