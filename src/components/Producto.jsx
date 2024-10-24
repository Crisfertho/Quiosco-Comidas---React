import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

export default function Producto({producto, botonAgregar = false, botonDisponible = false}) {

    const{handleClickModal,handleSetProducto, handleClickProductoAgotado} = useQuiosco(); //funcion que modifica el state de true a false y viceversa
    const {nombre, imagen, precio} = producto



  return (
    <div className="border p-3 shadow bg-gray-100 rounded-md">
        <img alt={`imagen ${imagen}`} className="w-full"
            src={`/img/${imagen}.jpg`}
        />
        <div className="p-5">
            <h3 className="text-xl font-bold">{nombre}</h3>
            <p className="mt-5 font-black text-2xl text-green-800">{formatearDinero(precio)}</p>

            {botonAgregar && (
                <button type="button"
                    className="bg-indigo-900 hover:bg-indigo-700 text-white 
                    w-full mt-5 p-3 uppercase font-bold rounded-lg"
                    onClick={() => {
                        handleClickModal();
                        handleSetProducto(producto);
                    }}>
                    Agregar
                </button>
            )}

            {botonDisponible && (
                <button type="button"
                className="bg-indigo-900 hover:bg-indigo-700 text-white 
                w-full mt-5 p-3 uppercase font-bold rounded-lg"
                onClick={() => handleClickProductoAgotado(producto.id)}
                >
                Producto Agotado
            </button>
            )}
        </div>
    </div>
  )
}
