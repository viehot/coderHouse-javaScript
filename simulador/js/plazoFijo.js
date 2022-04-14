const ano = 365
const tna = 0.435

let seleccion



let total = (monto, dias) => {
    interesGanado(monto , dias) + monto
}

let interesGanado = (monto, dias) => (monto * tna / ano) * dias