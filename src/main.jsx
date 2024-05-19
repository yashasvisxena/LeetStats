import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store/Store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import Login from "./components/Header/Login.jsx"
import Dashboard from "./components/Dashboard/Dashboard.jsx"
import Signup from "./components/Header/Signup.jsx"
import AuthLayout from "./components/Header/AuthLayout.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "dashboard",
        element: (
          <AuthLayout authentication>
            <Dashboard />
          </AuthLayout>
        ),
      },
      {
        path: "login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
