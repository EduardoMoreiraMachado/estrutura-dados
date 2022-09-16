'use strict'

const showArray = (array, element, title='Array') => {
    
    //selecionando um elemento do DOM
    const container = document.querySelector(element);
    //criando um novo elemento DIV
    const div = document.createElement('div');
    //adiciona uma classe na DIV criada
    div.classList.add('numbers-container');

    //populando a DIV nova com os elementos do array
    div.innerHTML = `
        <h2>${title}</h2>
        <div class="numbers-item">
            ${array.join('</div><div class="numbers-item">')}
        </div>
    `

    //imserindo o novo elemento no (DIV) no DOM
    container.appendChild(div);

}

export {

    showArray

}