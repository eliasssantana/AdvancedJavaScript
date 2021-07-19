//               Formas de se criar funções em javascript

// 1)
function log(value){
    console.log(value);
};

log("I LOVE GOD");

// 2)
const lug = function(value){
    console.log(value);
};

lug("Faith");

// 3) Também conhecida como Arrow Functions
const lig = value => console.log(value); 

lig("thankful");

const exibeValor = (a=5) => {
  console.log(a);
}
exibeValor(10);
exibeValor();

//Criando objetos com arrow functions
const createObj = () => ({test: "a"})

console.log(createObj());

// Como funções também são objetos, também é possível adicionar propriedades à funções, exceto pelas arrow functions. Vejamos...

function motoCycle(){
    this.nome = "Harley-Dayvidson"
}

// Posso cria uma instância da função motoCycle().
const motocycle = new motoCycle();
console.log(motocycle);

// criando um objeto para acessar seu contexto de criacção com o this

const myObj = {
    showContent: function(){
        console.log(this);
        this.log();
        setTimeout(() => {
          this.log();
        },2000);
    },
    log: function(value = "bar"){
        console.log(value);
    }
}

myObj.showContent();
myObj.log("aaa");

function multiply(a =5,b = a){ // nova maneira
    // b = b || 1 // maneira antiga de cria um default argument, porém dessa maneira se o valor de b fosse zero, o valor passaria a ser o valor do operando do lado direito do operador ternário.
    // b = typeof b === "undefined"? 1: b; // usando o operador ternário
    return a * b;
}

console.log(multiply());


//Lazy Evaluation
const randomNumbers = () => {
  const result = Math.random() * 10;
  return result;
}

const divide = (a,b = randomNumbers().toFixed(2)) => {
  return a / b;
}

console.log(divide(5));
console.log(divide(6));

const key = "Hello world"

const myObj2 = {
    key, // não preciso mais atribuir um valor, pois a propriedade e volor têm o mesmo nome.
    multy(a,b){ // posso criar uma função diretamente, pois é subentendido que a propriedade se chama multy e a função também. Isso contribui para se ter um código mais limpo e sem repetições(don't repeat yourself).
        return a * b;
    }
}

console.log(myObj2.multy(2,6));

const chave = "chave"
const obj = {
    [chave]: "value" // Nova forma de adicionar uma 'variável' à um objeto sem ter quer que definir, e depois inicializar o objeto.
}

obj[chave] = "Value"; // Forma antiga de inicializar um objeto com uma 'variável' coo chave

console.log(obj);

