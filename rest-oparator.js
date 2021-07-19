// APRENDENDO SOBRE REST OPERATOR NO JAVASCRIPT

// FORMA ANTERIOR AO ES6 PARA OBTER OS PARÂMETROS DE UMA FUNÇÃO
function soma(a,b){
    // console.log(arguments); // palavra reservada para exibição dos argumentos.
    console.log(arguments);
    var valores = 0;
    for(var i = 0; i < arguments.length; i++){
        valores += arguments[i];
    }
    return valores;
}

console.log(soma(6,9,8,9,2));

// USANDO O REST OPERATOR PARA OBTER TODOS OS ARGUMENTOS DE UMA FUNÇÃO DE FORMA PRÁTICA E RÁPIDA. POR RETORNAR UM ARRAY, É POSSÍVEL UTILIZAR MÉTODOS PRÓPRIOS DE ARRAYS. COMO, POR EXEMPLO, O MÉTODO REDUCE, O QUAL É POSSÍVEL OBTER A SOMA DE TODOS OS ELEMENTOS DE UM ARRAY. 
function divisao(...args){ // O REST OPERATOR RETORNA UM ARRAY COM TODOS OS ARGUMENTOS; A PALAVRA RESERVADA 'ARGUMENTS', POR SUA VEZ, RETORNA UM PROTOTYPE DO TIPO OBJECT.
    console.log(args)
    const resTotal = args.reduce((total,valor) => total += valor, 0);
    return resTotal;
}
console.log(divisao(2,4,5,6,4,7,9));

const mutiplicacao = (a,b) => { // NÃO CONSIGO ACESSAR O OBJETO ARGUMENTS EM ARROW FUNCTIONS. DESSA FORMA, É NECESSÁRIO UTILIZAR O REST OPERATOR.
  console.log(arguments); // ERRO
}

mutiplicacao(5,7,7,3,2,5,3,6)


// POSSO OBTER OS PARÂMETROS RESTANTES DE UMA FUNÇÃO SE UM DEFINIR, POR EXEMPLO, DOIS PARÂMETROS E O LOGO APÓS O OPERADOR REST. VAMOS A UM EXEMPLO.
function subtracao(a,b,...args){
    console.log(args);
}
subtracao(2,5,7,8,3,2,10,45); // IRÁ EXIBIR APENAS OS ARGUMENTOS 3 EM DIANTE, POR QUÊ? PORQUE O ARGUMENTO 1 E 2 ESTÃO DEFINIDOS COMO 'A' E 'B' COM PARÂMETROS; O TERCEIRO E O RESTO, REPRESENTADO PELO PARÂMETROS '...ARGS', OU SEJA, O REST OPERATOR.


const multiply = (...args) =>{
    const param = args.flat(); // O FLAT SERVE PARA REDUZIR AS DIMENSÕES DE UM ARRAY EM JAVASCRIPT.
    return param.reduce((acc, valor) => acc *= valor, 1);
}
const myArr = [1,4,6,7,7,8,4,2,4,78,6,4,9]

console.log(multiply(myArr));

// APRENDENDO SPREAD OPERATOR
const recebeEAplica = (...args) =>{ // REST OPERATOR
     return multiply(...args); // SPREAD OPERATOR
}
console.log(recebeEAplica(3,5,67,78,5,3,2,4));
