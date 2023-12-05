let listaDeNumeros = []
// let numeroEscolhido = gerarNumeroAleatorio();
let numeroEscolhido
let numeroMaximo = 5;
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2}) // funciona no chrome
}

function exibirMensagem(){
    exibirTextoNaTela("h1", "Jogo do número secreto")
    exibirTextoNaTela("p", "Escolha um numero de 1 a 5")
}

exibirMensagem()


function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroEscolhido) {
        exibirTextoNaTela("h1", "Acertou")
        let palavraTentativa  = tentativas > 1 ? "tentativas" : "tentativa"; // variavel recebe o conceito de, tentativas é maior que 1, se for escreve tentativas, se não tentativa:
        let mensagemTentativa = `Você acertou o numero secreto, com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela("p", mensagemTentativa)
        document.getElementById("reiniciar").removeAttribute("disabled"); // usado para selecionar o elemento do tipo ID, o remove inserido estar desabilitando o atributo selecionado
    } else {
        if (chute > numeroEscolhido) {
            exibirTextoNaTela("h1", "Errou")
            exibirTextoNaTela("p", "O numero secreto é menor.")
        } else {
            exibirTextoNaTela("h1", "Errou")
            exibirTextoNaTela("p", "O numero secreto é maior.")

        }
        tentativas++
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);

    let quantidadeNumerosEscolhidos = listaDeNumeros.length;
    if(quantidadeNumerosEscolhidos == numeroMaximo){
        listaDeNumeros = []
    }

    if (listaDeNumeros.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeros.push(numeroEscolhido)
        return numeroEscolhido
    }
}

console.log(gerarNumeroAleatorio());

// Função para limpar campo input
function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciaJogo(){
    let numeroEscolhido = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1;
    exibirMensagem()
    document.getElementById("reiniciar").setAttribute("disabled", true)

}

// -----------------------------------

