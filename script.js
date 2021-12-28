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
    var np = pessoas.length;
    var ns = Math.floor(Math.random() * np);
    if (np == 0) {
        pessoaSorteada.innerHTML = "Ninguém foi Adicionado!"
    } else {
        pessoaSorteada.innerHTML = "A pessoa vencedora foi " 
        setTimeout(tempo, 5000)
       timer = setInterval(tempo1, 1000)
    }
    let numero = 0;
    function tempo1() {
        pessoaSorteada.innerHTML += "."
        numero++
    }
    function tempo(){
        pessoaSorteada.innerHTML =  pessoas[ns] 
        clearTimeout(timer)
    }
}


