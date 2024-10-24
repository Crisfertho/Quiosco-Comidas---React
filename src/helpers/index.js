export const formatearDinero = cantidad => {
    return cantidad.toLocaleString('en-US',{ //Para convertir de string a USD
        style: 'currency',
        currency: 'USD'
    })
}