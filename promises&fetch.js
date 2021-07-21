// PROMISES
//  HÁ TRÊS TIPOS DE RETORNO DE PROMISES: PENDING - OU PENDENTE -, FULFILLED - OU COMPLETA - E REJECTED - OU REJEITADA.
const doSomethingWithPromise = () => new Promise((resolve, reject) =>{
    // throw new Error('Semething went wrong'); // REJEITA A PROMISE E RETORNA UM ERRO
    setTimeout(()=>{
        resolve('First Data')
    }, 5000);
})
const doOtherThingWithPromise = () => new Promise((resolve, reject)=>{
    // throw new Error("Something went wrong");
    setTimeout(() => resolve('Second data'),10000);
  }
)

// PROMISES IRÃO SER EXECUTADAS DE FORMA SÍNCRONA
Promise.all([doOtherThingWithPromise(), doOtherThingWithPromise()]).then(data => console.log(data)).catch(err => console.log(err)); // RETORNARÁ UMA LISTA

// PROMISE IRÁ RETORNAR O VALOR DA PROMISE RESOLVIDA PRIMEIRO EM RELAÇÃO À OUTRA.
Promise.race([doOtherThingWithPromise(), doOtherThingWithPromise()]).then(data => console.log(data)).catch(err => console.log(err));

// PROMISES IRÃO SER EXECUTADAS DE FORM ASSÍNCRONA.
console.log(doSomethingWithPromise()); //ESSA PROMISE ESTÁ PENDENTE POR CONTA DO SETTIMEOUT
doOtherThingWithPromise().then(data => console.log(data)).catch(error => console.log(error)); // RETORNA A PROMISE RESOLVIDA

doSomethingWithPromise().then(data => {
    console.log(data);
     return doOtherThingWithPromise().then(data2 => console.log(data2.split("")))}).catch(erro => console.log(erro));


// CALLBACK HELL - QUANDO A QUANTIDADE DE TRY CATCH SE EXCEDEM QUANDO SE TENTA TESTAR UMA POR UMA
const doSomething = callback => {
    setTimeout(()=>{
        callback('First Data')
    }, 1000);
};

const doOtherThing = callback => {
  setTimeout(() => callback('Second data'),1000);
}

const doAll = () =>{
    try{
        doSomething(data =>{
            let processedData = data.split("");
            try{
                doOtherThing(data2 =>{
                    let processedData2 = data2.split("");

                    try {
                        setTimeout(() => {
                            console.log(processedData, processedData2);
                        })
                    }catch(err){
                        console.log(err);
                    }
                })
            }catch(err){
                console.log(err)
            }
        })
    }catch(err){
        console.log(err);    }
}



function lerDados(data){
    try{
        setTimeout(()=>{
            let dados = data.forEach((el)=>{
                console.log(`Você digitou esse argumentos na função data: ${el}`)
            })
        }, 2000);
    }catch(err){
        console.log(`Erro: ${err}`)
    }
   
    return dados;
}


function data(...dados){
    let itens  = [...dados];
    return itens;
}
let dados = data(3,6,8,2,4,6,57,3,34,9)
console.log(dados);
console.log(lerDados(dados));