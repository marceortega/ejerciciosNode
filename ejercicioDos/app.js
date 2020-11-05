

console.log("---------TAREA LISTA---------")
console.log("para poder automoatixar la tarea, usamos cambios en el package json")

function saludo (){
    return "Hola Mundo Node";
}

console.log(saludo ());

let calculo ={
    duplicar: function(valor1){
        return valor1*2;
    },
    dividir: function(valor1){
        return valor1/2;
    }

}

console.log(calculo.duplicar (50), calculo.dividir(60));