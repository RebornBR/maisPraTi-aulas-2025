const formAdicionar = document.getElementById('form-adicionar')
const inputItem = document.getElementById('input-item')
const corpoTabela = document.getElementById('corpo-tabela')
const btnLimpar = document.getElementById('btn-limpar')
const contadorTotal = document.getElementById('contador-total')
const contadorPendentes = document.getElementById('contador-pendentes')
const contadorComprados = document.getElementById('contador-comprados')
const filtroStatus = document.getElementById('filtro-status')
const filtroOrdenacao = document.getElementById('filtro-ordenacao')

let itens = []

window.addEventListener('DOMContentLoaded', () => {
    const dados = localStorage.getItem('listaCompras')
    if (dados) {
        itens = JSON.parse(dados)
    }
    renderizarTabela()
})

function salvarDados() {
    localStorage.setItem('listaCompras', JSON.stringify(itens))
}

function atualizarContadores(){
        contadorTotal.textContent = itens.length
        contadorPendentes.textContent = itens.filter(i => !i.comprado).length
        contadorComprados.textContent = itens.filter(i => i.comprado).length
}

filtroStatus.addEventListener('change', renderizarTabela)
filtroOrdenacao.addEventListener('change', renderizarTabela)

function renderizarTabela() {
    atualizarContadores()
    
    const status = filtroStatus.value;
    const ordenar = filtroOrdenacao.value;
    if(status === "pendente"){
        itens = itens.filter(i => !i.comprado);
    }
    if(status === "comprado"){
       itens = itens.filter(i => i.comprado);
    }

    if(ordenar === "alfabetica"){
        itens = itens.sort((a, b) => a.nome.localeCompare(b.nome));
    }
    if(ordenar === "status"){
        itens = itens.sort((a, b) => a.comprado - b.comprado);
    }

    let exibicao = [...itens]

    corpoTabela.innerHTML = ''
    const tabela = corpoTabela.closest('table') 
    if (itens.length === 0) {
        tabela.style.display = 'none' 
        return
    }
    tabela.style.display = 'table' 

    exibicao.forEach((item, index) => {
        const linha = document.createElement('tr')
        const tdNome = document.createElement('td')
        tdNome.textContent = item.nome
        const tdCheckbox = document.createElement('td')
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = item.comprado
        checkbox.addEventListener('change', () => {
            itens[index].comprado = checkbox.checked
            salvarDados()
            atualizarContadores();
        })
        tdCheckbox.appendChild(checkbox)
        const tdRemover = document.createElement('td')
        const btnRemover = document.createElement('button')
        btnRemover.textContent = 'X'
        btnRemover.classList.add('botao-remover')
        btnRemover.addEventListener('click', () => {
            removerItem(index)
            atualizarContadores();
        })
        tdRemover.appendChild(btnRemover)
        linha.appendChild(tdNome)
        linha.appendChild(tdCheckbox)
        linha.appendChild(tdRemover)
        corpoTabela.appendChild(linha)
    })   

}

formAdicionar.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const novoItem = inputItem.value.trim()
    if (novoItem === '') return
    itens.push({ nome: novoItem, comprado: false })
    salvarDados()
    renderizarTabela()
    inputItem.value = ''
})

function removerItem(indice) {
    itens.splice(indice, 1)
    salvarDados()
    renderizarTabela()
}

btnLimpar.addEventListener('click', () => {
    if (confirm('Deseja realmente limpar toda a lista?')) {
        itens = []
        salvarDados()
        renderizarTabela()
    }
})