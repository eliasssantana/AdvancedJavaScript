// EVENTEMITTER

const EventEmitter = require('events'); // IMPORTO O MÓDULO(classe) EVENTS, POIS DESSA FORMA POSSO RETORNAR UM CALLBACK QUANDO UM EVENTO OCORRER.

class Users extends EventEmitter{ // HERDO A CLASSE EVENTEMITTER PARA MINHA CLASSE USER
    userLogged(data){ // CRIO O MÉTODO QUE DISPARA UM EVENTO E RECEBE SEU O QUE SERÁ ENVIADO ATRAVÉS DESSE EVENTO
        this.emit('User logged',data); // ISSO(THIS) IRÁ RECEBER O NOME DO EVENTO COMO PRIMEIRO PARÂMETRO E DISPARA O SEGUNDO PARÂMETRO.
    }
}

// const emitter = new EventEmitter(); // INSTANCIO O EVENTEMITTER(), CHAMANDO-O DE 'EMITTER'

const users = new Users(); // INSTANCIO A CLASSE USERS()

users.on('User logged', data =>{ // USO O MÉTODO ON() PARA CONSUMIR O RETORNO DO EVENTO EMITIDO PELO MÉTODO EMIT() QUANTAS VEZES FOREM NECESSÁRIAS
    setTimeout(()=>{
        console.log(data, "Como o método on()")
    }, 5000); // PRINTO O RETORNO NA TELA

});

users.once('User logged', data =>{ // O MÉTODO ONCE() COMO O NOME JÁ SUGERE IRÁ CONSUMIR O EVENTO APENAS UMA VEZ.
    console.log(data);
});

users.userLogged({user: 'Elias Santana'}); // INVOCO O MÉTODO QUE IRÁ EMITIR MEU EVENTO PERSONALIZADO, E RECEBE COMO ARGUMENTO O QUE SERÁ EMITIDO
users.userLogged({user: 'John Doe'});
// emitter.emit('User logged',{user:'Elias Santana'}); // CRIO O EVENTO E SEU RETORNO