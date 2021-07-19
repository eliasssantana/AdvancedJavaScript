// SEM GENERATORS
function hello(){
    console.log("hello");
    console.log("From");
    console.log("Function");
}
hello()

// COM GENERATORS
function* ola(){
    console.log("Olá");
    yield 1;
    console.log("de");
    const value = yield 2;
    console.log(value);
    yield 3;
}

const genFunction = ola();
console.log(genFunction.next());
console.log(genFunction.next());
console.log(genFunction.next("algum lugar!"));

// UTILIZANDO O GENERATOR PARA PERCORRER UM WHILE LOOP INFINITO
function* naturalNumbers(){
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}

const it = naturalNumbers();

console.log(it.next());// MÉTODO NEXT() ITERAR OS VALORES DO WHILE LOOP PARA O PRÓXIMO.
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// UTILIZANDO O GENERATOR PARA ITERAR VALORES DE UM OBJETO LITERAL
const obj = {
    values: [1,2,3,4,5],
    *[Symbol.iterator](){
        for(let i = 0; i < this.values.length; i++){
            yield this.values[i];
        }
    }
}

for(let i of obj){
    console.log(i);
}

