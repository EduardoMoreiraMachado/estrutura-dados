'use strict'

import { showArray } from "./showArray.js";

const numbers = [23, 5, 9, 10, 100, 45];

//valores com desconto de 2
const desconto2 = (number) => number - 2;
//MAP - percorre o array e retorna um array do mesmo tamanho modificado ou não
//sintaxe - array.map(callback)
//parâmetros do callback - elemento, índice ou array
const numbersDesconto2 = numbers.map(desconto2);

//filtrar os elementos menores que 20
const menor20 = (valor) => valor < 20;
//FILTER - percorre o array aplicando um callback e retorna um array do mesmo tamanho ou não
//sintaxe - array.filter(callback)
//parâmetros do callback - elemento, índice ou array
const valorMenor20 = numbers.filter(menor20);

//somar todos os valores
const soma = (a, b) => a + b;
//REDUCE - percorre o array aplicando um callback e retorna um único valor
//sintaxe - array.reduce(callback)
//parâmetros do callback - elemento, índice ou array
const valorTotal = numbers.reduce(soma);

//somar 100 em todos os valores
const aumento100 = (number) => number + 100;

const numbers100 = numbers.map(aumento100);

//filtrar os elementos pares
const pares = (valor) => valor % 2 == 0;

const numbersPares = numbers.filter(pares);

//valores com desconto de 4
const descontoTotal4 = (a, b) => (a + b) - 4;

const totalDesconto4 = numbers.reduce(descontoTotal4, 0);

//filtrar os elementos ímapres e somar 21
const impares = (valor) => valor % 2 != 0;
const soma21 = (number) => number + 21;

const numbersImpares = numbers.filter(impares);
const numbersImpares21 = numbersImpares.map(soma21);

showArray(numbers, 'main', 'Todos os números');
showArray(numbersDesconto2, 'main', 'Desconto de 2');
showArray(valorMenor20, 'main', 'Valores < 20');
showArray([valorTotal], 'main', 'Total de valores');
showArray(numbers100, 'main', 'Somando 100');
showArray(numbersPares, 'main', 'Valores pares');
showArray([totalDesconto4], 'main', 'Desconto de 4');
showArray(numbersImpares21, 'main', 'Impares + 21');