const ano = 365;
const tna = 0.435;
let seleccion = 0;
const listPlazoFijo = [];

class PlazoFijo {
    constructor(monto , dias) {
        this.monto = monto;
        this.dias = dias;
    }
    total(){
        return parseFloat(this.monto) + parseFloat(this.interesGanado());
    }
    interesGanado(){
        let interes = (this.monto * tna / ano) * this.dias;
        return interes.toFixed(2);
    }
}

// Valido el monto y devuelvo el numero
let monto = () => {
    let validar = 0;
    while (true) {
        validar = prompt("Ingrese el monto");
        if (validarNumero(validar)) {
            break
        } else {
            alert("Ingrese un numero");
        }
    }
    return validar;
}

// Valido los dias y devuelvo el numero
let fecha = () => {
    let validar = 0;
    while (true) {
        validar = prompt("Ingrese los dias, desde 30 y hasta 365");
        if (validarNumero(validar)) {
            if (validar >= 30 && validar <= 365) {
                break
            } else {
                alert("Ingrese los dias entre 30 y 365");
            }
        } else {
            alert("Ingrese un numero");
        }
    }
    return validar;
}

//Arranca
do {
    seleccion = prompt("Bievenido al simulador de plazo fijo.\n\nSeleccione la opcion que desea\n1. Plazo Fijo\n2. Listar Plazos Fijos\n3. Listar de mayor a menor\n4. Listar de menor a mayor\n5. Salir");
    switch (parseInt(seleccion)) {
        case 1:
            crearPlazoFijo();
            break;
        case 2:
            verLista(listPlazoFijo);
            break;
        case 3:
            verLista(ordenarMayorAMenorPlazoFijo());
            break;
        case 4:
            verLista(ordenarMenorAMayorPlazoFijo());
            break;
        case 5:
            console.log("Gracias por su visita");
            break;
    
        default:
            alert("Opcion incorrecta");
            break;
    }
} while (seleccion != 5);


//creo el objeto plazo fijo, pasandole por parametro las funciones que validan los datos y lo agrego a la array
function crearPlazoFijo () {
    listPlazoFijo.push( new PlazoFijo( monto(), fecha()));
}

//funcion para mostrar en consola el array completo
//Recibe un array como parametro verifica que no este vacia y la itera
function verLista (arrayPlazoFijo) {
    if (arrayPlazoFijo.length != 0) {
        console.log("LISTA DE PLAZO FIJO");
        for (let pl of arrayPlazoFijo) {
            console.log("El monto ingresado fue de "+ pl.monto);
            console.log("En "+ pl.dias + " dias");
            console.log("Con una TNA (tasa nominal anual) de "+ (tna * 100) +"%");
            console.log("Con un interes de "+ pl.interesGanado());
            console.log("Te queda un total de "+ pl.total());
            console.log("++++++++++++++++++++");
        }
    } else {
        alert("No hay Plazos Fijos echos");
    }
}

//funcion para ordenar de mayor a menor los plazo fijos
//devuelve una copia del array para no perjudicar el original y la ordena
function ordenarMayorAMenorPlazoFijo (){
    return copiarArray().sort((a,b) => b.monto - a.monto);
}

//funcion para ordenar de menor a mayor los plazo fijos
//devuelve una copia del array para no perjudicar el original y la ordena
function ordenarMenorAMayorPlazoFijo (){
    return copiarArray().sort((a,b) => a.monto - b.monto);
}

// funcion que devuelve una copia del array para evitar cambios en el original
function copiarArray () {
    return listPlazoFijo.slice(0);
}

//Valido que sea un numero lo que ingrese el usuario, devuelvo un booleano
function validarNumero(validar) {
    return (!isNaN(validar) && validar != null && validar != "");
}
