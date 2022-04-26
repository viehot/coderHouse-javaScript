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
    seleccion = prompt("Bievenido al simulador de plazo fijo.\n\nSeleccione la opcion que desea\n1.Plazo Fijo\n2.Listar Plazos Fijos\n3.Listar de mayor a menor\n4.Listar de menor a mayor\n5.Salir")
    switch (parseInt(seleccion)) {
        case 1:
            crearPlazoFijo();
            break;
        case 2:
            verLista(listPlazo);
            break;
        case 3:
            listarMayorAMenorPlazoFijo();
            break;
        case 4:
            
            break;
        case 5:
            console.log("Gracias por su visita");
            break;
    
        default:
            alert("Opcion incorrecta");
            break;
    }
} while (seleccion != 5);

function crearPlazoFijo () {
    listPlazo.push( new PlazoFijo( monto(), fecha()));
}

//Valido que sea un numero lo que ingrese el usuario, devuelvo un booleano
function validarNumero(validar) {
    return (!isNaN(validar) && validar != null && validar != "")
}

//funcion para ordenar de mayor a menor los plazo fijos
//recibe una copia del array para no perjudicar el original
function listarMayorAMenorPlazoFijo (){
    let orden = copiarArray()
    orden.sort((a,b) => b.monto - a.monto)
    verLista(orden)
}

// funcion que devuelve una copia del array para evitar cambios en el original
function copiarArray () {
    return listPlazo.slice(0)
}

//funcion para mostrar en consola el array completo
function verLista (arrayPlazoFijo) {
    if (arrayPlazoFijo.length != 0) {
        console.log("LISTA DE PLAZO FIJO")
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
