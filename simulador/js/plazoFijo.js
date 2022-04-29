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
    seleccion = prompt("Bievenido al simulador de plazo fijo.\n\nSeleccione la opcion que desea\n1. Plazo Fijo\n2. Cambiar color del boton\n3. Salir");
    switch (parseInt(seleccion)) {
        case 1:
            crearPlazoFijo();
            break;
        case 2:
            let changeColorButton = document.getElementsByTagName("button");
            changeColorButton[0].className = "btn btn-success";
            break;
        case 3:
            verLista(listPlazoFijo);
            console.log("Gracias por su visita");
            break;
        
        default:
            alert("Opcion incorrecta");
            break;
    }
} while (seleccion != 3);


//creo el objeto plazo fijo, pasandole por parametro las funciones que validan los datos y lo agrego a la array
function crearPlazoFijo () {
    listPlazoFijo.push( new PlazoFijo( monto(), fecha()));
}

//funcion para mostrar en consola el array completo
//Recibe un array como parametro verifica que no este vacia y la itera
function verLista (arrayPlazoFijo) {
    if (arrayPlazoFijo.length != 0) {
        console.log("LISTA DE PLAZO FIJO");
        let tableDOMLista = document.getElementById("listaPlazoFijo");
        tableDOMLista.innerHTML = "";
        for (let pl of arrayPlazoFijo) {
            tableDOMLista.innerHTML += `<tr>
                <td>${pl.monto}</td>
                <td>${pl.dias}</td>
                <td>${tna * 100}%</td>
                <td>${pl.interesGanado()}</td>
                <td>${pl.total()}</td>
            </tr>`;
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
