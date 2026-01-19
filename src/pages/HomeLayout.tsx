import { Outlet } from "react-router"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"

export default function HomeLayout() {
  return (
    <div className="w-full h-screen bg-black flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}
