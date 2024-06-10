//Variaveis
let nomeHeroi = "Zamis";
let xp = 2560;
let eloAtual;

switch (true) {
    case xp < 1000:
        eloAtual = "Ferro";
        break;
    case xp >= 1001 && xp <= 2000:
        eloAtual = "Bronze";
        break;
    case xp >= 2001 && xp <= 5000:
        eloAtual = "Prata/Ouro"
        break;
    case xp >= 5001 && xp <= 8000:
        eloAtual = "Platina/Diamante"
        break;
    case xp >= 8001 && xp <= 9000:
        eloAtual= "Ascendente"
        break;
    case xp >= 9001 && xp <= 10000:
        eloAtual= "Imortal"
        break;
    case xp >= 10001:
        eloAtual= "Radiante"
        break;
    
  


}
console.log("O herói de nome " + nomeHeroi + " está no nível de " + eloAtual + ".");