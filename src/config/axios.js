import axios from "axios";

const clienteAxios = axios.create({
    baseURL: import.meta.env.VITE_APP_NAME,
    headers: {
        'Accept' : 'application/json',
        'X-Requested-With' : 'XMLHttpRequest'
    },
    withCredentials: true
})

export default clienteAxios