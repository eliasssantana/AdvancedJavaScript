// SYMBOL SE TORNAM "PRIVADOS" EM OBJETOS, SÓ É POSSÍVEL ACESSÁ-LOS ATRAVÉS DE MÉTODOS ESPECÍFICOS.
const id = Symbol("1");
const id2 = Symbol("1");
const id3 = "1";
const id4 = "1";
console.log(id === id2); // RETORNA FALSO PORQUE SYMBOL SÃO ÚNICOS
console.log(id3 === id4); // RETORNA TRUE PORQUE SÃO IGUAIS E DO MESMO TIPO: "STRING".

const obj = {
    [id]: "hello",
    [id2]: "hello"
}

// RETORNAM UM OBJETO VAZIO
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// RETORNA A CHAVE NORMALMENTE
console.log(Object.getOwnPropertySymbols(obj));

// WELL KNOWN SYMBOLS
Symbol.iterator // SYMBOLS POSSUEM MÉTODOS

console.log(Array.prototype);

const arr = [1,2,3,4];
const it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// MANEIRA ANTIGA DE ITERAR UM ARRAY
while(true){
    const {value: valor, done: pronto} = it.next(); // destructuring para obter as chaves do objeto iterável.
    console.log(valor, pronto);
    if(pronto){
        break;
    }
    console.log(valor);
}
// "REDEFININDO O CONSOLE.LOG() PARA ESCREVER MAIS RÁPIDO"
const clg = (valor) => {
  console.log(valor);
}

// MANEIRA NOVA DE FAZER A MESMA COISA
const str = "Hello World"
for(let value of arr){
    clg(value);
}

for(let l of str){
    clg(l);
}

// TORNANDO UM OBJETO LITERAL ITERÁVEL
const objIteravel = {
    values: [1,2,3,4],
    [Symbol.iterator](){
        let i = 0;
        return{
            next: () => {
                i++;
                return{
                    value: this.values[i -1],
                    done: i > this.values.length
                }
            }
        }
    }
} 

const its = objIteravel[Symbol.iterator]();

clg(its.next());
clg(its.next());
clg(its.next());
clg(its.next());
clg(its.next());

// UTILIZANDO O FOR OF PARA ITERAR O NOSSO OBJETO ITERÁVEL
for(let valor of objIteravel){
    clg(valor);
}
const arrFromObjIteravel = [...objIteravel];
clg(arrFromObjIteravel);