import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export default function AdminSidebar() {

    const {logout} = useAuth({middleware: 'auth'})

  return (
    <aside className="md:w-72 h-screen">
        <div className="p-3">
            <img 
                src="/img/logo.svg"
                alt="imagen logotipo"
                className="w-40"
            />    
        </div>

        <nav className="flex flex-col p-4">
            <Link to="/admin" className="font-bold text-lg">Ordenes</Link>
            <Link to="/admin/productos" className="font-bold text-lg">Productos</Link>
        </nav>

        {/* Para cerrar la sesión*/}
        <div className=" my-4 px-4">
            <button type="button" className="text-center bg-red-600 w-full font-bold p-3 text-white rounded-lg truncate"
              onClick={logout}
            >
              Cerrar Sesión
            </button>
        </div>
    </aside>
  )
}
