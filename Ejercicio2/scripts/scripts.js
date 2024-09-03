let num1 = prompt ("Ingrese el primer numero: ")
let num2 = prompt ("Ingrese el segundo numero: ")

if (isNaN(num1) || isNaN(num2) ){
    console.log("Los valores no son numeros.")
}else{
    console.log("La suma es: " + (parseFloat(num1) + parseFloat(num2)))
}