/* aplicado en arrays */
let colores=["rojo","azul","amarillo"]

let colorRojo= colores[0]
let colorAzul= colores[1]
let colorAmarillo= colores[2]

let [rojo,azul,patito]=colores

console.log(colorRojo,patito);

/* aplicado a Obj lit */

let auto={
    marca:"volkswagen",
    modelo:"vento",
    precio:6000000,
    km:60000,
    color:"turquesa",
    anio:2020,
    patente:"IPI 244",
    vendido: true

}

let{color:pintura,anio,km,marca,modelo,patente,precio,vendido:jeanette}= auto

console.log(jeanette);