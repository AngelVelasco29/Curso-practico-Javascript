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
    return lado1*1+lado2*1+base*1;
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
}
// const PI= Math.PI;

function perimetroCirculo(radio){
    return diametroCirculo(radio)*Math.PI;
}
function areaCirculo(radio){
    return (radio*radio)*Math.PI;
}

// console.log("El radio del circulo es " + radioCirculo + "cm, el diametro del circulo es " + diametroCirculo+ "cm, y PI vale " + PI);
// console.log("El perímetro del circulo es: " + perimetroCirculo + "cm");
// console.log("El área del circulo es: " + areaCirculo+"cm^2");

function perimetroRectangulo(altura,base){
    return (altura*1+base*1)*2;
}

function areaRectangulo(altura,base){
    return (altura*base);
}

console.groupEnd();

//HTML empieza aqui

function calcularPerimetroAreaCuadrado(){
    const input= document.getElementById("inputCuadrado");
    const value =input.value;
    const perimetro= perimetroCuadrado(value);
    const area= areaCuadrado(value);
    alert("El area es: " + area +"cm^2 y el perimetro es: " + perimetro+ "cm");
}

function calcularPerimetroTriangulo(){
    const input1=document.getElementById("inputTrianguloLado1");
    const lado1=input1.value;
    const input2=document.getElementById("inputTrianguloLado2");
    const lado2=input2.value;
    const input3=document.getElementById("inputTrianguloBase");
    const base=input3.value;
    const perimetro=perimetroTriangulo(lado1,lado2,base);
    alert("El perímetro del triangulo es: "+perimetro + "cm");
}

function calcularAreaTriangulo(){
    const input4=document.getElementById("inputTrianguloBase2");
    const base=input4.value;
    const input5=document.getElementById("inputTrianguloAltura");
    const altura=input5.value;
    const area=areaTriangulo(base,altura);
    alert("El area del triangulo es: "+area+"cm^2");
}
function alturaIsoceles(lado,base){
    return Math.sqrt(lado*lado-(base*base)/4);
}

function calcularPerimetroAreaCirculo(){
    const input= document.getElementById("inputCirculo");
    const value =input.value;
    const area= areaCirculo(value);
    const perimetro= perimetroCirculo(value);
    alert("El area es: " + area +"cm^2 y el perimetro es: " + perimetro +"cm");
}

function calcularPerimetroAreaRectangulo(){
    const input1= document.getElementById("inputRectanguloAltura");
    const input2= document.getElementById("inputRectanguloBase");
    const altura =input1.value;
    const base= input2.value;
    const perimetro= perimetroRectangulo(altura,base);
    const area=areaRectangulo(altura,base);
    alert("El area es: " + area +"cm^2 y el perimetro es: " + perimetro +"cm");
}

function calcularAlturaIsoceles(){
    const input1= document.getElementById("inputTrianguloLado1");
    const input2= document.getElementById("inputTrianguloLado2");
    const input3= document.getElementById("inputTrianguloBase");
    const lado1=input1.value;
    const lado2=input2.value;
    const base=input3.value;
    var altura;
    if(lado1==lado2){
        altura= alturaIsoceles(lado1, base);
        alert("La altura del triangulo isoceles es " + altura + "cm");
    }else if(lado1==base){
        altura= alturaIsoceles(lado1, lado2);
        alert("La altura del triangulo isoceles es " + altura + "cm");
    }else if(lado2==base){
        altura= alturaIsoceles(lado2, lado1);
        alert("La altura del triangulo isoceles es " + altura + "cm");
    } else{
        alert("Este no es un triangulo Isoceles");
    }

}