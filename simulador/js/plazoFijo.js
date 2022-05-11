const ano = 365;
const tna = 0.435;
const listPlazoFijo = [];
//Guardo en una constante el formulario de plazo fijo
const formulario = document.getElementById("formPlazoFijo");
//Guardo en una constante los botones para ordenar la lista de plazo fijo
const lista = document.getElementsByClassName("ordenar");

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

//Llamo la funcion para mostrar los plazos fijos que tiene en el Local Storage
mostrarStorage();

//Activo el evento submit del formulario del plazo fijo
formulario.addEventListener("submit", crearPlazoFijo);

//Los botones para ordenar estan definidos con una clase, cada vez que se oprima va a llamar a la funcion que le corresponda
lista[0].onclick = () => {verLista(listPlazoFijo)};
lista[1].onclick = () => {verLista(ordenarMayorAMenorPlazoFijo())};
lista[2].onclick = () => {verLista(ordenarMenorAMayorPlazoFijo())};



//tomo el evento del formulario, selecciono los datos del input, se los paso al array creando un nuevo plazo fijo
//llamo a la funcion para guardarlos en el local Storage y los muestra en la lista
function crearPlazoFijo (e) {
    e.preventDefault();
    let monto = document.getElementsByClassName("ch-monto")[0].value;
    let fecha = document.getElementsByClassName("ch-dias")[0].value;
    listPlazoFijo.push( new PlazoFijo( monto, fecha));
    cargarStorage();
    verLista(listPlazoFijo);
}

//funcion para mostrar en la tabla el array completo
//Recibe un array como parametro verifica que no este vacia y la itera
function verLista (arrayPlazoFijo) {
    if (arrayPlazoFijo.length != 0) {
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

//Cargo los plazos fijos en el Local Storage
function cargarStorage() {
    const arrayLocalStorag = JSON.stringify(listPlazoFijo);
    localStorage.setItem("plazoFijo", arrayLocalStorag);
}

//Muestro los plazos fijos que previamente se cargaron en el Local Storage
function mostrarStorage() {
    const arrayGetStorage = JSON.parse(localStorage.getItem("plazoFijo"));
    if(arrayGetStorage != null) {
        for (const pl of arrayGetStorage) {
            listPlazoFijo.push(new PlazoFijo(pl.monto,pl.dias));
        }
        verLista(listPlazoFijo);
    }
}
