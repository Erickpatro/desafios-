import {AbrigoAnimais } from "./abrigo-animais.js";



//console.log({erro: 'Animal inválido'});
//console.log("I am a Live");


const abrigo1 = new AbrigoAnimais().encontraPessoas('CAIXA,RATO', 'RATO,BOLA', 'Lulu');

//abrigo1.forEach(p => {console.log(p);});

const abrigo2 = new AbrigoAnimais().encontraPessoas('RATO,BOLA','RATO,NOVELO', 'Rex,Fofo');

//abrigo2.forEach(p => console.log(p));

const abrigo3 = new AbrigoAnimais().encontraPessoas('BOLA,LASER','BOLA,NOVELO,RATO,LASER', 'Mimi,Fofo,Rex,Bola');

//console.log("Third Result possibility ---> "+ abrigo1.forEach(p => console.log(p)));



