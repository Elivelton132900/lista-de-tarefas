const input = document.querySelector('input[nome=tarefa]')
const botao = document.querySelector('[botaoCadastro]')
const ul = document.querySelector('[listaDeTarefas]')
const lista = localStorage.length ? JSON.parse(localStorage.ListaTarefas) : []

if (localStorage.length) {
    for (let i = 0; i < lista.length; i++) {
        let novoEl = document.createTextNode(lista[i])
        let novoLi = document.createElement('li')
        novoLi.appendChild(novoEl)
        ul.appendChild(novoLi)
    }
}

function adicionarTarefa() {
    let elemento = document.createElement('li')
    elemento.innerHTML = input.value
    ul.appendChild(elemento)
    lista.push(elemento.textContent)
}

botao.addEventListener('click', () => {
    if(input.value != '') {
        adicionarTarefa()
        armazenaStorage()
        input.value = ''
    } else {
        alert('Adicione uma tarefa primeiro')
    }
})

function armazenaStorage() {
    localStorage.setItem('ListaTarefas', JSON.stringify(lista))
}

ul.addEventListener('click', (e) => {
    elementoDisparado = e.target

    if(elementoDisparado.tagName == 'LI') {
        let textoElemento = elementoDisparado.textContent
        lista.splice(lista.indexOf(textoElemento), 1)
        ul.removeChild(elementoDisparado)
        armazenaStorage()
    }
})