var listaGames = 
["https://i.imgur.com/E4n37NL.png", "https://i.imgur.com/Uy2t6Ck.png",
"https://i.imgur.com/M9PUWEo.png", "https://i.imgur.com/6aMgRwc.png",
"https://i.imgur.com/xEUIz2z.png", "https://i.imgur.com/EVvH5oS.png"]

var linkGames = 
["https://codepip.com/games/flexbox-froggy/", "https://cssbattle.dev/",
"https://cssgridgarden.com/", "https://br.codecombat.com/",
"https://checkio.org/", "https://www.codemonkey.com/"]

var nomeGames = ["FLEXBOX FROGG", "CSS BATTLE","GRID GARDEN",
"CODE COMBAT", "CHECKIO", "CODEMONKEY"]

let quadroArray = " ";
for (var i = 0; i < listaGames.length; i++) {
    quadroArray += '<div class="games-item"><div class="imagem"><a class="game" href='+ linkGames[i] + '><img src=' + listaGames[i] + ' class="gameImage"></a></div> <h2>' + nomeGames[i] + '</h2></div>';
}
document.write(`<div class="quadroBox">${quadroArray}</div>`);


