
var cartaMiau = {
    nome: "Sphynx",
    imagem: "https://media.giphy.com/media/YmVNzDnboB0RQEpmLr/giphy.gif",
    atributos: {
        ataque: 70,
        Longividade: 15,
        Fofura: 70
    }
}

var cartaFlufly = {
    nome: "Azul russo",
    imagem: "https://media.giphy.com/media/CqVNwrLt9KEDK/giphy.gif",
    atributos: {
        ataque: 60,
        Longividade: 20,
        Fofura: 85
    }
}

var cartaCurt = {
    nome: "Munchkin",
    imagem: "https://media.giphy.com/media/W0fgdNlZAbdfy/giphy.gif",
    atributos: {
        ataque: 50,
        Longividade: 13,
        Fofura: 95
    }
}

var cartaCut = {
    nome: "Scottish Fold",
    imagem: "https://media.giphy.com/media/m27v0lkuHLqrm/giphy.gif",
    atributos: {
        ataque: 40,
        Longividade: 12,
        Fofura: 95
    }
}

var cartaPer = {
    nome: "Persa",
    imagem: "https://media.giphy.com/media/hsbBp0SVB6HzOUkI8B/giphy.gif",
    atributos: {
        ataque: 90,
        Longividade: 14,
        Fofura: 70
    }
}

var cartaGora = {
    nome: "Angorá",
    imagem: "https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif",
    atributos: {
        ataque: 60,
        Longividade: 14,
        Fofura: 80
    }
}

var cartaSnow = {
    nome: "Snowshoe",
    imagem: "https://media.giphy.com/media/Hl5PyFbfHzhnO/giphy.gif",
    atributos: {
        ataque: 70,
        Longividade: 17,
        Fofura: 70
    }
}

var cartaManes = {
    nome: "Gato manês",
    imagem: "https://media.giphy.com/media/rho9L4MsYXaec/giphy.gif",
    atributos: {
        ataque: 62,
        Longividade: 13,
        Fofura: 80
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaMiau, cartaFlufly, cartaCurt, cartaCut, cartaPer, cartaGora, cartaSnow, cartaManes]
//                 0           1           2          3        4        5            6          7

var pontosJogador = 0
var pontosMaquina = 0


atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length

    divQuantidadeCartas.innerHTML = html
}


function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"

    divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura =  '<img src="https://i.imgur.com/cx3GcKG.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final"> Venceu *O* </p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final"> Perdeu T-T </p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final"> Empatou O_O </p>'
    }

    if (cartas.length == 0) {
        alert("Fim de jogo")
        if (pontosJogador > pontosMaquina) {
            htmlResultado = '<p class="resultado-final">Venceu</p>'
        } else if (pontosMaquina > pontosJogador) {
            htmlResultado = '<p class="resultado-final">Perdeu</p>'
        } else {
            htmlResultado = '<p class="resultado-final">Empatou</p>'
        }
    } else {
        document.getElementById('btnProximaRodada').disabled = false
    }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://i.imgur.com/cx3GcKG.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
    var divCartas = document.getElementById('cartas')

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`

    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true

    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
}