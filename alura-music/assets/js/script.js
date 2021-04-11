function adicionarMusica() {

    var input = document.querySelector('#musica')
    var inputUsuario = input.value

    if (inputUsuario.startsWith('https://open.spotify.com/embed/track/')) {
        listarMusicaNaTela(inputUsuario)
    } else {
        alert("Link inválido... Insira novamente.")
    }
    
    input.value = " "
}

function listarMusicaNaTela(musica) {
    var listaMusica = document.querySelector('#listaMusica')
    var elementoMusica = "<iframe src=" + musica + " style='margin-top: 150px; position: block' width='500' height='400' title='SpotiFy Music player' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>"
    listaMusica.innerHTML = listaMusica.innerHTML + elementoMusica
}

function arrumarLink(linkErrado) {
    var corteLink = linkErrado.substring(32,43)
    var linkNovo = ("https://open.spotify.com/track/")
    console.log(linkNovo + ' 2')
    var linkCerto = linkNovo + corteLink
    console.log(linkCerto + ' 3')
    listarMusicaNaTela(linkCerto)
}

