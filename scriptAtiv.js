//1. Somar os elementos de um vetor Solicite ao usuário 5 números utilizando prompt() e armazene-os em um vetor. Depois, calcule e exiba a soma total dos valores.
function somaCincoNumeros(){
let numeros = [];
let soma = 0
for (let i = 0; i < 5; i++){
    let numero = parseInt(prompt(`Digite um número ${i + 1}:`));
    numeros.push(numero);

    soma = soma + numero;
}

 alert(`A soma dos números inseridos é: ${soma}`)
}
