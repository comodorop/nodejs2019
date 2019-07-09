let x = 0
let y = "0"


console.log(x === y)


function dameNombre(nombre, edad = 0, obj) {

    if(typeof parseInt(edad) === "number"){
        console.log("Dejalo Pasar")
    }else{
        console.log("Formato invalido")
    }

    let nombre2 = obj ? obj.nombre : ""
    // if (obj === undefined) {
    //     nombre2 = "No tiene nombre"
    // } else {
    //     nombre2 = obj.nombre
    // }

    console.log(typeof edad)
}

dameNombre("Pablo")