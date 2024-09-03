function contarVocales(texto){
    const vocales = "aeiouAEIOU";
    var contador = 0;

    for(var cursor= 0; cursor < texto.length; cursor++){
        if(vocales.includes(texto[cursor])){
            contador++;
        }
    }

    return contador;
}
console.log(contarVocales("Hola Mundo"));
var res = contarVocales("Hola Mundo");