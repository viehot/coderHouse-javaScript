const ano = 365
const tna = 0.435

let seleccion

let monto = () => {
    let validar
    while (true) {
        validar = prompt("Ingrese el monto")
        if (!isNaN(validar) && validar != null && validar != "") {
            break
        } else {
            alert("Ingrese un numero")
        }
    }
    return validar
}

do {
    seleccion = prompt("Bievenido al simulador de plazo fijo.\n\nSeleccione la opcion que desea\n1.Plazo Fijo\n2.Salir")
    if (seleccion == 1) {
        let pesos = monto()
    } else {
        
    }
} while (seleccion != 2);




// Calculo el total del plazo fijo
let total = (monto, dias) => {
    interesGanado(monto , dias) + monto
}

// Calculo los intereses ganados por los dias que se establece el plazo fijo
let interesGanado = (monto, dias) => (monto * tna / ano) * dias