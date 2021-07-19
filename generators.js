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

function* naturalNumbers(){
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}
