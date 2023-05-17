
// Calcolo randomico dadi

console.log('-Lancio dadi-')


// Check del giocatore col numero più alto

const Check = document.querySelector('a')

const timer = ms => new Promise(res => setTimeout(res, ms))


Check.addEventListener('click', 
async function(){
    
    const result = document.getElementById('result');
    result.classList.remove('fade');

    for(let i = 1 ; i < 10 ; i++){
        let PlayerDice = Math.floor(Math.random() * 6) + 1;
        document.getElementById('scoreplayer').innerHTML = 'Hai fatto:';
        document.getElementById('dice').innerHTML = '<img src="img/p' + PlayerDice + '.svg" alt="">';
        let AiDice = Math.floor(Math.random() * 6) + 1;
        document.getElementById('scoreai').innerHTML = 'Ha fatto:';
        document.getElementById('dice2').innerHTML = '<img src="img/a' + AiDice +'.svg" alt="">';
        await timer(200);
    }

    let PlayerDice = Math.floor(Math.random() * 6) + 1;
        document.getElementById('scoreplayer').innerHTML = 'Hai fatto: ' + PlayerDice;
        document.getElementById('dice').innerHTML = '<img src="img/p' + PlayerDice + '.svg" alt="">';
        let AiDice = Math.floor(Math.random() * 6) + 1;
        document.getElementById('scoreai').innerHTML = 'Ha fatto: ' + AiDice;
        document.getElementById('dice2').innerHTML = '<img src="img/a' + AiDice +'.svg" alt="">';

        if (PlayerDice > AiDice){
            document.getElementById('result').innerHTML = '<h1>Hai vinto!</h1>';
            result.classList.add('win');
            result.classList.remove('lose');
            result.classList.remove('spare');
            result.classList.toggle('fade');

        }else if(AiDice > PlayerDice){
            document.getElementById('result').innerHTML = '<h1>Hai perso :c</h1>';
            result.classList.add('lose');
            result.classList.remove('win');
            result.classList.remove('spare');
            result.classList.toggle('fade');
        }else{
            document.getElementById('result').innerHTML = '<h1>Spareggio!</h1>';
            result.classList.add('spare');
            result.classList.remove('win');
            result.classList.remove('lose');
            result.classList.toggle('fade');
        }

}
)



