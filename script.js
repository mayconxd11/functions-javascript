//função calcula
//imc de pacientes
//deve receber peso e altura

const prompt = require ('prompt-sync')();
const imcCal = require ('./imc');

let soma = 0
console.log ('---IMC---');

const pesoText = prompt ('Digite seu peso');
const peso = Number (pesoText);

const alturaText = prompt ('Digite sua altura');
const altura = Number (alturaText);

soma = imcCal (peso,altura);

console.log(`${soma} Esse é seu imc ideal:`);