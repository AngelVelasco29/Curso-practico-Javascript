//Codigo del Cuadrado
console.group("Cuadrados");
//const ladoCuadrado=5;
//console.log("Los lados del cuadrador miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){ 
    return lado* 4;
};

function areaCuadrado(lado){
    return lado*lado;
};
//console.log("El área del cuadrado es: " + areaCuadrado +"cm^2");

console.groupEnd();

//Codigo del Triangulo
console.group("Triangulos");

// const ladoTriangulo1= 6;
// const ladoTriangulo2= 6;
// const baseTriangulo= 4;
// const alturaTriangulo=5.5;
// console.log("Los lados del triangulo miden " + ladoTriangulo1 + "cm , " + ladoTriangulo2 + "cm , " + baseTriangulo + "cm.");

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
};
function areaTriangulo(base, altura){
    return (base*altura)/2;
};

// console.log("El perímetro del triangulo es: " + perimetroTriangulo + "cm");
// console.log("El área del Triangulo es: " + areaTriangulo +"cm^2");

console.groupEnd();

//Codigo del circulo

console.group("Circulos");

// const radioCirculo= 5;
function diametroCirculo(radio){
    return radio*2;
};
// const PI= Math.PI;

function perimetroCirculo(radio){
    return diametroCirculo(radio)*Math.PI;
};
function areaCirculo(radio){
    return (radio*radio)*Math.PI;
};

// console.log("El radio del circulo es " + radioCirculo + "cm, el diametro del circulo es " + diametroCirculo+ "cm, y PI vale " + PI);
// console.log("El perímetro del circulo es: " + perimetroCirculo + "cm");
// console.log("El área del circulo es: " + areaCirculo+"cm^2");




console.groupEnd();
