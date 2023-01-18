const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//array of all the characters without numbers and symbols
const characters2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//array of all the characters without symbols
const characters3 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//array of all the characters without numbers
const characters4 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?"]

let display1 = document.getElementById("display1")
let display2 = document.getElementById("display2")


let checkBox = document.getElementById("numbers-box")
let checkBox2 = document.getElementById("symbols-box")
function generatePassword() {
    let passwordLength = document.getElementById("pass-length").value
    let password = ""
    let passwordArray = []
    if (checkBox.checked === false && checkBox2.checked === false) {
        passwordArray = characters2

    }else if (checkBox.checked === true && checkBox2.checked === false) {
        passwordArray = characters3
    }else if (checkBox.checked === false && checkBox2.checked === true) {
        passwordArray = characters4
    }else{
        passwordArray = characters
    }

    for (let i = 0; i < passwordLength; i++) {
        password += passwordArray[Math.floor(Math.random() * passwordArray.length)];
    }

    return password

}

function displayPassword() {
    display1.textContent = generatePassword()
    display2.textContent = generatePassword()
}





