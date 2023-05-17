
// // Calcolo randomico dadi

// console.log('-Lancio dadi-')

// const PlayerDice = Math.floor(Math.random() * 6) + 1
// console.log('Hai fatto: ' + PlayerDice)

// const AiDice = Math.floor(Math.random() * 6) + 1
// console.log('Il pc ha fatto: ' + AiDice)

// // Check del giocatore col numero più alto

// if (PlayerDice > AiDice){
//     console.log('Hai vinto!')
// }else if(AiDice > PlayerDice){
//     console.log('Ha vinto il pc')
// }else{
//     console.log('Spareggio')
// }



// Check dell'email per loggare

const AllowedEmails = [ 'ginopaoli@gmail.com', 'gabibbo@hotmail.it', 'cesco@yahoo.it', 'boolean@gmail.com'];

const AmmountToCheck = AllowedEmails.length

const Check = document.querySelector('button')

Check.addEventListener('click', 
function(){

    let UserEmail = document.querySelector('#email');
    UserEmail = UserEmail.value;

    for (let i = 0; i < AmmountToCheck; i++){

        if ( UserEmail === AllowedEmails[i] ){
            document.getElementById('responsepos').innerText = 'Accesso al database consentito!';
            document.getElementById("responseneg").style.display = "none";
        }else{
            document.getElementById('responseneg').innerText = 'Accesso al database negato!';
        }
    }
}
)