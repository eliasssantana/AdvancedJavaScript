// FETCH

// POR DEFAULT O MÉTODO DO FETCH SERÁ O GET, MAS OS SEGUNDO PARÂMETRO SERÁ A CONFIGURAÇÃO DO REQUEST, SENDO ASSIM PODEREMOS DEFINIR O MÉTODO PARA 'POST','PUT' OU 'DELETE', TANTO FAZ.
fetch('http://localhost:3000/data.json', {method: 'post'}).then(responseData => { // USANDO O FETCH PARA OBTER UM REQUEST. FETCH RETORNA UMA PROMISE E POR ISSO É POSSÍVEL UTILIZAR OS MÉTODOS ASSOCIADOS ÀS PROMISES.
if(responseData.status === 200){
    responseData.json().then((data)=>{
        console.log(data);
      })
}else{
    throw new Error("Request Error"); // EM CASOS DE ERRO, ESSE STATEMENT SERÁ EXECUTADO.
}
}).catch((erro) => { // CATCH É UTILIZADO PARA CASOS DE ERRO NO RETORNO DA PROMISE.
  console.log(erro);
})
