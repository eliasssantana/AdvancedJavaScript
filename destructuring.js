// FORMA ANTERIOR À ES6 PARA ATRIBUIR ELEMENTOS DE UM ARRAY À UMA VARIÁVEL.
let arr = ['Apple','Banana','Orange', ['Tomate']];
let arrObj = [{nome: "Pineapple",type: "Fruit"},{nome: "Grape", type: "Fruit"}];

const [{nome: fruitName1},{nome: fruitName2}] = arrObj;
let apple = arr[0];
let banana = arr[1];
let orange = arr[2];
let tomate = arr[3][0];
console.log(fruitName1, fruitName2);

// UTILIZANDO O ES6 PARA FAZER A MESMA COISA QUE O DE CIMA, PORÉM UTILIZANDO O DESTRUCTURING ASSIGNMENT.

const [apple2,banana2,orange2, [tomate2]] = arr; // BEM MELHOR! 

console.log(apple, apple2, tomate, tomate2)

// UTILIZANDO DESTRUCTURING PARA CRIAR VARIÁVEIS A PARTI DE OBJETOS.

const obj = {
    nome: "Elias",
    props : {
        age: 20,
        favoriteColor: ["blue","white"]
    }
}

//const nome = obj.nome; // FORMA ANTIGA DE ATRIBUIR VALOR À VARIÁVEIS A PARTIR DE OBJETO LITERAL.

const idade = obj.props.age;
const colorWhite = obj.props.favoriteColor[1];

// console.log(nome)


// NOVA FORMA DE FAZER A MESMA COISA QUE O AS LINHAS DE CÓDIGO ACIMA.

const {nome} = obj; // AQUI O NOME DA VARIÁVEL DEVE SER O MESMO QUE O NOME DA PROPRIEDADE DO OBJETO EM QUESTÃO.

const {nome: nome2} = obj; // AQUI EU ESTOU 'DIZENDO' QUE O VALOR DA PROPRIEDADE 'NOME' É ATRIBUÍDO A VARIÁVEL 'NOME2'.

const {props: {age: idade2, favoriteColor: [color1, color2]}} = obj;
console.log(nome,idade);
console.log(nome2, idade2);
console.log(colorWhite);
console.log(`Essas são suas cores favoritas: ${color1} e ${color2}`);

// FUNCTIONS 

// SOMANDO ELEMENTOS DE UM ARRAY 'DA FORMA ANTIGA'.
function sum(arr){
    return arr[0] + arr[1];
}

function soma([a,b] = [5,3]){ // USANDO DESTRUCTURING ASSIGNMENT. ATRIBUO O ÍNDICE 0 E 1 ÀS VARIÁVEIS 'A' E 'B', RESPECTIVAMENTE. E ATRIBUÍ VALORES PADRÕES PARA OS PARÂMETROS - DEFAULT VALUES - NO CASO DE AUSÊNCIA DE ARGUMENTOS.
    return a + b;
}
console.log(sum([7,9]));
console.log(soma([3,5,6,7]));
console.log(soma());

function times({a,b} = {a:5, b:9}){ // VALORES PADRÕES PARA PARÂMETROS DE OBJETOS LITERAIS.
    return a * b;
}

console.log(times({a:6, b: 8}));
console.log(times());

