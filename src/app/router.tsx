import Dashboard from "@/pages/Dashboard"
import HomeLayout from "@/pages/HomeLayout"
import List from "@/pages/List"
import Menu from "@/pages/Menu"
import { createBrowserRouter } from "react-router"

export const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/list", element: <List /> },
      { path: "/menu", element: <Menu /> },
    ],
  },
])
