import { createRef,useState } from 'react'
import {Link} from 'react-router-dom'
import clienteAxios from '../config/axios';
import Alerta from '../components/Alerta';
import { useAuth } from '../hooks/useAuth';

export default function Registro() {

  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmationRef = createRef();

  const [errores, setErrores] = useState([])
  const {registro} = useAuth({middleware: 'guest', url:'/' })

  const handleSubmit = async e => {
    e.preventDefault();

    const datos = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }

    registro(datos, setErrores)
    
  }
  
  return (
    <>
    <h1 className="text-4xl font-black">Crea tu Cuenta</h1>
    <p>Crea tu cuenta llenando el formulario</p>
    <div className="bg-gray-50  shadow-md rounded-md mt-8 px-5 py-8">
      <form onSubmit={handleSubmit} 
        noValidate
      >
     
        <div className="mb-4">
          <label className="text-slate-800" htmlFor="name"> 
            Nombre:
          </label>
          <input type="text" id="name" name="name" placeholder="Tu Nombre"
            className="mt-2 w-full p-2 bg-gray-100"
            ref={nameRef}/>
            {errores.name && <Alerta>{errores.name}</Alerta>}
        </div>
        <div className="mb-4">
          <label className="text-slate-800" htmlFor="email"> 
            Correo Electrónico:
          </label>
          <input type="email" id="email" name="email" placeholder="Tu Email"
            className="mt-2 w-full p-2 bg-gray-100"
            ref={emailRef}/>
            {errores.email && <Alerta>{errores.email}</Alerta>}
        </div>
        <div className="mb-4">
          <label className="text-slate-800" htmlFor="password"> 
            Contraseña:
          </label>
          <input type="password" id="password" name="password" placeholder="Tu Contraseña"
            className="mt-2 w-full p-2 bg-gray-100"
            ref={passwordRef}/>
            {errores.password && <Alerta>{errores.password}</Alerta>}
        </div>
        <div className="mb-4">
          <label className="text-slate-800" htmlFor="password_confirmation"> 
            Repetir Contraseña:
          </label>
          <input type="password" id="password_confirmation" name="password_confirmation" placeholder="Repite tu Contraseña"
            className="mt-2 w-full p-2 bg-gray-100"
            ref={passwordConfirmationRef}/>
            {errores.password_confirmation && <Alerta>{errores.password_confirmation}</Alerta>}
        </div>

        <input type="submit" value="Crear Cuenta"
        className="bg-indigo-700 hover:bg-indigo-800 text-white w- w-full mt-4 p-2 rounded-lg uppercase font-bold cursor-pointer"/>
      </form> 
    </div>

    <nav className="mt-5">
        <Link to="/auth/login">
          ¿Ya tienes cuenta? Inicia Sesión.
        </Link>
      </nav>
    </>
  )
}
