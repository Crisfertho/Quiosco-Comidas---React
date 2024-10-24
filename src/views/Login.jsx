import { createRef,useState } from 'react'
import {Link} from 'react-router-dom'
import Alerta from '../components/Alerta';
import { useAuth } from '../hooks/useAuth';

export default function Login() {

  const emailRef = createRef();
  const passwordRef = createRef();

  const [errores, setErrores] = useState({})
  const {login} = useAuth({
    middleware: 'guest',
    url: '/'
  })

  const handleSubmit = async e => {
    e.preventDefault();

    const datos = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }

    login(datos, setErrores)
  }

  return (
    <>
      <h1 className="text-4xl font-black">Inicias Sesión</h1>
      <p>Crea ordenar debes Iniciar Sesión</p>
      <div className="bg-gray-50  shadow-md rounded-md mt-8 px-5 py-8">
        <form onSubmit={handleSubmit}
              noValidate
        >  
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="email"> 
              Correo Electrónico:
            </label>
            <input type="email" id="email" name="email" placeholder="Tu Email"
              className="mt-2 w-full p-2 bg-gray-100"
              ref={emailRef} />
                {errores.email && <Alerta>{errores.email[0]}</Alerta>}  {/* Muestra el error del email */}
         </div>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="password"> 
              Contraseña:
            </label>
            <input type="password" id="password" name="password" placeholder="Tu Contraseña"
              className="mt-2 w-full p-2 bg-gray-100"
              ref={passwordRef} />
                  {errores.password && <Alerta>{errores.password[0]}</Alerta>} {/* Muestra el error de la contraseña */}
           </div>

          <input type="submit" value="Iniciar Sesión"
          className="bg-indigo-700 hover:bg-indigo-800 text-white w- w-full mt-4 p-2 rounded-lg uppercase font-bold cursor-pointer"/>
        </form> 
      </div>

      <nav className="mt-5">
        <Link to="/auth/registro">
          ¿No tienes cuenta? Crea una cuenta.
        </Link>
      </nav>
    </>
  )
}
