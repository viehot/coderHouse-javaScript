let seleccion
do {
    let seleccion = prompt("Bienvenido\nSeleccione una opcion.\n1.Agregar Persona.\n2.Salir")
    if (seleccion == 1) {
        let nombre = prompt("Escriba su nombre")
        let apellido = prompt("Escriba su apellido")
        console.log("Hola " + nombre + " " + apellido)
    } else if(seleccion == 2) {
        console.log("Gracias por su visita")
    } else {
        console.log("No selecciono una opcion correcta")
    }
} while (seleccion == 2);
