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

let fecha = () => {
    let validar
    while (true) {
        validar = prompt("Ingrese los dias, desde 30 y hasta 365")
        if (!isNaN(validar) && validar != null && validar != "") {
            if (validar >= 30 && validar <= 365) {
                break
            } else {
                alert("Ingrese los dias entre 30 y 365")
            }
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
        let dias = fecha()
        console.log("El monto ingresado fue de "+ )
    } else if (seleccion == 2){
        console.log("Gracias por su visita")
    } else {
        alert("Opcion incorrecta")
    }
} while (seleccion != 2);




// Calculo el total del plazo fijo
let total = (monto, dias) => {
    interesGanado(monto , dias) + monto
}

// Calculo los intereses ganados por los dias que se establece el plazo fijo
let interesGanado = (monto, dias) => (monto * tna / ano) * dias