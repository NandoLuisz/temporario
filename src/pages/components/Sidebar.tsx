import { LayoutDashboard, ScrollText, Menu, SquarePen } from "lucide-react"

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Pedidos", icon: ScrollText },
  { label: "Lista", icon: Menu },
  { label: "Gerencia", icon: SquarePen },
]

export default function Sidebar() {
  return (
    <nav className="w-50 h-screen flex flex-col py-10 gap-10">
      <h2 className="text-white px-4">NFL's Menu</h2>
      <ul className="w-[80%] flex flex-col gap-2 h-screen">
        {menuItems.map(({ label, icon: Icon }) => (
          <li
            key={label}
            className="
        bg-zinc-700 rounded-r-sm px-4 py-2
        flex items-center gap-2
        transition-all duration-200
        hover:scale-105 hover:bg-zinc-600 hover:shadow-lg
        cursor-pointer
      "
          >
            <Icon className="w-5 h-5" />
            {label}
          </li>
        ))}
      </ul>
    </nav>
  )
}
