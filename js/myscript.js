
// Calcolo randomico dadi

console.log('-Lancio dadi-')

const PlayerDice = Math.floor(Math.random() * 6) + 1
console.log('Hai fatto: ' + PlayerDice)

const AiDice = Math.floor(Math.random() * 6) + 1
console.log('Il pc ha fatto: ' + AiDice)

// Check del giocatore col numero più alto

if (PlayerDice > AiDice){
    console.log('Hai vinto!')
}else if(AiDice > PlayerDice){
    console.log('Ha vinto il pc')
}else{
    console.log('Spareggio')
}