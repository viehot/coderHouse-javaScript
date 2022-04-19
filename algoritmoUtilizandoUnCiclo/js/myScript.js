let seleccion
do {
    seleccion = prompt("Bienvenido\nSeleccione una opcion.\n1.Agregar Personas.\n2.Salir")
    if (seleccion == 1) {
        let cantidad = prompt("Que cantidad?");
        for (let i = 0; i < cantidad; i++) {
            let nombre = prompt("Escriba su nombre")
            let apellido = prompt("Escriba su apellido")
            console.log("Hola " + nombre + " " + apellido)
        }
    } else if(seleccion == 2) {
        console.log("Gracias por su visita")
    } else {
        console.log("No selecciono una opcion correcta")
    }
} while (seleccion != 2);
