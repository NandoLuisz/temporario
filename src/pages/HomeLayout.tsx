import { Outlet } from "react-router"

import { LayoutDashboard, ScrollText, Menu, SquarePen } from "lucide-react"

export default function HomeLayout() {
  return (
    <div className="w-full h-screen">
      <div className="w-50 h-screen flex flex-col bg-black py-10 gap-10">
        <h2 className="text-white px-4">NFL's Menu</h2>
        <ul className="w-[80%] flex flex-col gap-2 h-screen">
          <li
            className="
                bg-zinc-700 rounded-r-sm px-4 py-2
                transition-all duration-200
                hover:scale-105 hover:bg-zinc-600 hover:shadow-lg
                cursor-pointer flex gap-2 
              "
          >
            <LayoutDashboard />
            Dashboard
          </li>
          <li
            className="
              bg-zinc-700 rounded-r-sm px-4 py-2
              transition-all duration-200
              hover:scale-105 hover:bg-zinc-600 hover:shadow-lg
              cursor-pointer flex gap-2
            "
          >
            <ScrollText />
            Pedidos
          </li>

          <li
            className="
                bg-zinc-700 rounded-r-sm px-4 py-2
                transition-all duration-200
                hover:scale-105 hover:bg-zinc-600 hover:shadow-lg
                cursor-pointer flex gap-2
              "
          >
            <Menu />
            Lista
          </li>

          <li
            className="
                bg-zinc-700 rounded-r-sm px-4 py-2
                transition-all duration-200
                hover:scale-105 hover:bg-zinc-600 hover:shadow-lg
                cursor-pointer flex gap-2
              "
          >
            <SquarePen />
            Gerencia
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  )
}
