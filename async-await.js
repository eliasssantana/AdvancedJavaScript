// ES7 - ASYNC/AWAIT
// O USO DO ASYNC TRANSFORMA A FUNÇÃO EM UMA PROMISE
const learningAsync = async() =>{
    // throw new Error("Oh no, oh no, oh no,no,no...") // GERO UM ERRO PARA TESTAR O CATCH DA MINHA PROMISE
    return [1,3,5,46,75,8,4];
}

learningAsync().then(data =>{
    const dados = [...data]; // OBTENHO CADA ELEMENTO DO ARRAY DE RETORNO DA FUNÇÃO ASYNC E GUARDO EM UM NOVO ARRAY, E POSTERIORMENTE O PERCORRO.
    console.log("Dados do array")
    dados.forEach((i) => { // AQUI EU PERCORRO TODO O ARRAY E PRINTO SEUS VALORES
      console.log(i)
    })
}).catch(err => console.log(err))

const asyncTimer = () => new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Olá, mundo!")
    }, 1000);
})

const newPromiseFunc = async() =>{
    const data = await asyncTimer(); // ESPERA A PROMISE SER RESOLVIDA PARA RECEBER O RETORNO

    // POSSO CRIAR UMA CADEIA DE REQUISIÇÕES UTILIZANDO O FETCH PARA RECEBER ESSAS REQUISICÕES E UTILIZA O AWAIT PARA ESPERAR PELA REQUISIÇÃO ANTERIOR SER RESOLVIDA PARA RETORNA A ATUAL, OU SEJA, DE FORMA SEQUENCIAL. QUANDO NECESSITO DE UM RETORNO EM PARALELO, UTILIZO O PROMISE.ALL E PASSO AS FUNÇÕES ASYNC EM UM ARRAY
    const data = await Promise.all([asyncTimer(), fetch("./data.json").then(asyncData => console.log(asyncData)).catch(err => console.log(err))]) // RETORNA DE FORMA SIMULTÂNEA

    const dataJson = await fetch("./data.json").then(asyncData => console.log(asyncData)).catch(err => console.log(err));
    return letraA;
}


console.log(newPromiseFunc());