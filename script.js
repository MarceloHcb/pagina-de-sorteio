let botao = document.getElementById("botao")
let nome = document.getElementById("nome")
let val = document.getElementById("valor")
let nomes = document.getElementById("nomes")
let lista = document.getElementById("lista")

let pessoas = []
let ultimo = pessoas.length
function adicionar() {
    let valor = val.value
    if (valor == "") {
        pessoaSorteada.innerHTML = "Digite um nome para o sorteio! "

    } else {
        pessoas.push(valor)
        nome.innerHTML = pessoas.length
        lista.innerHTML = pessoas
        val.value = ""
    }
}
function remover() {
    pessoas.pop()
    nome.innerHTML = pessoas.length
    lista.innerHTML = pessoas
    val.value = ""
}
let pessoaSorteada = document.getElementById("pessoa-sorteada")

function sortear() {
    let np = pessoas.length;
    let ns = Math.floor(Math.random() * np);
    if (np == 0) {
        pessoaSorteada.innerHTML = "Ninguém foi Adicionado!"
    } else {
        pessoaSorteada.innerHTML = "A pessoa vencedora foi " + pessoas[ns]

    }
}
