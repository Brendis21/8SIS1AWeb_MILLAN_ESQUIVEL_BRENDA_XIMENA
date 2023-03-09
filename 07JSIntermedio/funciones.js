/*
Las variables que se ocupan dentro de js son 3

VAR - variable que esta siendo sustituida
LET - variable protegida que solo funciona dentro de una funcion o declaracion o fragmento de codigo
CONST - variable constante en todo el documento 
*/

if (true) {
    const x = "x";
    console.log(x);
}

var x ="Z";
console.log(x);

function suma(n1,n2){
    return n1 + n2;
}

console.log(`suma(n1,n2): ${suma(3,4)}` );



const sumaF = (n1, n2) => n1+n2;

























console.log('suma')









const razasDePerros= [
    "Gran Danes",
    "Pastor Aleman",
    "Chihuahua",
    "Belga",
    "Pitbull",
    "Dalmata",
    "San Bernardo",


]




/*

for(const raza of razasDePerros){
    console.log(raza);
}
*/

for(const indice in razasDePerros){
    console.log(razasDePerros[indice]);
}

//forEach -> iterar sobre elementos del 
// arreglo que no devuelven nada 

//razasDePerros.forEach((raza, indice, arregloOriginal)=>console.log(raza));


//razasDePerros.forEach(raza=> console.log(raza));

/*con la funcion MAP itera
sobre los elemetos del arreglo y 
regresa un arreglo diferente con el 
cual nos lo muestre
*/

const razasDePerrosEnMayusculas = razasDePerros.map((raza,indice, arregloOriginal)=>)