var numeroSorteado = parseInt(Math.random() * 30);
var tentativas = 5

function compare() {
  
  while (tentativas > 0) {

    var chute = parseInt(document.getElementById("chuteValor").value);

    if (numeroSorteado == chute) {
      document.getElementById("resultado").innerHTML = "Aceeeertou *O*";
      return
    } 
    else if (chute > numeroSorteado) {
    document.getElementById("resultado").innerHTML = "O número sorteado é menor O.O Tente outra vez";
    tentativas = tentativas - 1;
    return
    }
    else if (chute < numeroSorteado) {
    document.getElementById("resultado").innerHTML = "O número sorteado é maior >.< Tente outra vez";
    tentativas = tentativas - 1;
    return
    }
  }
  if (tentativas == 0) {
    document.getElementById("resultado").innerHTML = "Suas tentativas esgotaram. O número sorteado era " + " " + numeroSorteado;
  }
}