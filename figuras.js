//Codigo del Cuadrado
console.group("Cuadrados");
const ladoCuadrado=5;
console.log("Los lados del cuadrador miden: " + ladoCuadrado + "cm");

const perimetroCuadrado= ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado= ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado +"cm^2");

console.groupEnd();

//Codigo del Triangulo
console.group("Triangulos");

const ladoTriangulo1= 6;
const ladoTriangulo2= 6;
const baseTriangulo= 4;
const alturaTriangulo=5.5;
console.log("Los lados del triangulo miden " + ladoTriangulo1 + "cm , " + ladoTriangulo2 + "cm , " + baseTriangulo + "cm.");

const perimetroTriangulo= ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo= (baseTriangulo*alturaTriangulo)/2;

console.log("El perímetro del triangulo es: " + perimetroTriangulo + "cm");
console.log("El área del Triangulo es: " + areaTriangulo +"cm^2");

console.groupEnd();

//Codigo del circulo

console.group("Circulos");

const radioCirculo= 5;
const diametroCirculo= radioCirculo *2;
const PI= Math.PI;

const perimetroCirculo= PI*diametroCirculo;

const areaCirculo= (radioCirculo*radioCirculo)*PI

console.log("El radio del circulo es " + radioCirculo + "cm, el diametro del circulo es " + diametroCirculo+ "cm, y PI vale " + PI);
console.log("El perímetro del circulo es: " + perimetroCirculo + "cm");
console.log("El área del circulo es: " + areaCirculo+"cm^2");




console.groupEnd();
