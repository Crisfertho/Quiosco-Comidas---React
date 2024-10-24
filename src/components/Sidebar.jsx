import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria"
import { useAuth } from "../hooks/useAuth";

export default function Sidebar() {

  const {categorias} = useQuiosco();
  const {logout, user} = useAuth({middleware: 'auth'});
  
  return (
    <aside className="md:w-72">
        <div className="p-4">
            <img className="w-40"
            src="img/logo.svg"/>
        </div>
        <p className=" my-6 text-md underline font-bold text-center text-cyan-900">Bienvenido: {user?.name}</p>
        <div className="mt-8">
            {categorias.map(categoria => (
              <Categoria 
                key={categoria.id}
                categoria = {categoria}
              />
              
            ))}
        </div>
        <div className="my-5 px-5">
            <button type="button" className="text-center bg-red-600 w-full font-bold p-3 text-white rounded-lg truncate"
              onClick={logout}
            >
              Cancelar Orden
            </button>
        </div>
    </aside>
  )
}
