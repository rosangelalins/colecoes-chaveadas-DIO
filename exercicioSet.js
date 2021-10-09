const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

//função de valores unicos que vai receber um array
function valoresUnicos(arr){
    const mySet = new Set(arr);
    //retornar a um novo array com os valores únicos, 
    //caso não coloque ele só vai colocar o set dentro do array, 
   // porém para que eles se tornem elementos de um array é necessário utilizar o spread
    //utilizando a técnica Rest e Spread operator
    return[...mySet];
}

console.log(valoresUnicos(meuArray));