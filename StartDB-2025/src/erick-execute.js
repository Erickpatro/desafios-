import {AbrigoAnimais } from "./abrigo-animais.js";


const abrigo1 = new AbrigoAnimais().encontraPessoas('CAIXA,RATO', 'RATO,BOLA', 'Lulu');
const abrigo2 = new AbrigoAnimais().encontraPessoas('RATO,BOLA','RATO,NOVELO', 'Rex,Fofo');
const abrigo3 = new AbrigoAnimais().encontraPessoas('BOLA,LASER','BOLA,NOVELO,RATO,LASER', 'Mimi,Fofo,Rex,Bola');




