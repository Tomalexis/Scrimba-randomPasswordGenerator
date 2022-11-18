const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPasswordEl = document.getElementById("first-password");
let secondPasswordEl = document.getElementById("second-password");

function generatePasswords() {
    function randomize(){
    let password = []
    for(let i=0; i <= 15; i++){
        password.push(characters[(Math.floor(Math.random()*characters.length))])
    }
        return password.join('')   
    }
    firstPasswordEl.textContent = randomize()
    secondPasswordEl.textContent = randomize()
}

function copyFirstText() {
    document.getElementById('first-password').style.backgroundColor = 'lightgray';
    document.getElementById('first-password').style.color = '#6b7180';
    let firstPasswordContent = firstPasswordEl.innerText;
    navigator.clipboard.writeText(firstPasswordContent);
}

function copySecondText() {
    document.getElementById('second-password').style.backgroundColor = 'lightgray';
    document.getElementById('second-password').style.color = '#6b7180';
    let secondPasswordContent = secondPasswordEl.innerText;
    navigator.clipboard.writeText(secondPasswordContent);
}
