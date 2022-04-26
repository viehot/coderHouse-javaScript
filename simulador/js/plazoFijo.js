const ano = 365
const tna = 0.435
let seleccion
const listPlazo = []

class PlazoFijo {
    constructor(monto , dias) {
        this.monto = monto
        this.dias = dias
    }
    total(){
        let interes = this.interesGanado()
        return parseFloat(this.monto) + parseFloat(interes)
    }
    interesGanado(){
        let interes = (this.monto * tna / ano) * this.dias
        return interes.toFixed(2)
    }
}


// Valido el monto y lo devuelvo
let monto = () => {
    let validar
    while (true) {
        validar = prompt("Ingrese el monto")
        if (validarNumero(validar)) {
            break
        } else {
            alert("Ingrese un numero")
        }
    }
    return validar
}

// Valido los dias y los devuelvo
let fecha = () => {
    let validar
    while (true) {
        validar = prompt("Ingrese los dias, desde 30 y hasta 365")
        if (validarNumero(validar)) {
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
    seleccion = prompt("Bievenido al simulador de plazo fijo.\n\nSeleccione la opcion que desea\n1.Plazo Fijo\n2.Listar Plazos Fijos\n3.Salir")
    if (seleccion == 1) {
        let pesos = monto()
        let dias = fecha()
        const plazo = new PlazoFijo(pesos,dias)
        listPlazo.push(plazo)
    } else if (seleccion == 2){
        listarMayorAMenorPlazoFijo()
        /*
        if (listPlazo.length != 0) {
            for (let pl of listPlazo) {
                console.log("El monto ingresado fue de "+ pl.monto)
                console.log("En la cantidad de dias "+ pl.dias)
                console.log("Con una TNA (tasa nominal anual) de "+ (tna * 100) +"%")
                console.log("Con un interes de "+ pl.interesGanado())
                console.log("Te queda un total de "+ pl.total())
                console.log("++++++++++++++++++++")
            }
        } else {
            alert("No hay Plazos Fijos echos")
        }
        */
    } else if (seleccion == 3){
        console.log("Gracias por su visita")
    } else {
        alert("Opcion incorrecta")
    }
} while (seleccion != 3);

//Valido que sea un numero lo que ingrese el usuario, devuelvo un booleano
function validarNumero(validar) {
    return (!isNaN(validar) && validar != null && validar != "")
}

function listarMayorAMenorPlazoFijo (){
    let orden = copiarArray()
    orden.sort((a,b) => b.monto - a.monto)
    verLista(orden)
}

function copiarArray () {
    return listPlazo.slice(0)
}

function verLista (arrayPlazoFijo) {
    if (arrayPlazoFijo.length != 0) {
        for (let pl of arrayPlazoFijo) {
            console.log("El monto ingresado fue de "+ pl.monto)
            console.log("En la cantidad de dias "+ pl.dias)
            console.log("Con una TNA (tasa nominal anual) de "+ (tna * 100) +"%")
            console.log("Con un interes de "+ pl.interesGanado())
            console.log("Te queda un total de "+ pl.total())
            console.log("++++++++++++++++++++")
        }
    } else {
        alert("No hay Plazos Fijos echos")
    }
}