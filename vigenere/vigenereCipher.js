var request = new XMLHttpRequest();
request.open('GET', 'EncryptingKey.txt', false);
request.send();
var encryptingKey = request.responseText.trim().toLowerCase();

// Encryption
const toEncryptedTextBox = document.querySelector("#toEncryptedTextBox");
const encryptedTextBox = document.querySelector("#encryptedTextBox");

// Decryption
const toDecryptedTextBox = document.querySelector("#toDecryptedTextBox");
const decryptedTextBox = document.querySelector("#decryptedTextBox");

// Buttons
const encryptBtn = document.querySelector("#encryptBtn");
const decryptBtn = document.querySelector("#decryptBtn");

const alphabet = "aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż";
let alphabetTable = [];

// Create a alphabet table
for(let i=0; i < alphabet.length; i++){
    
    let currentString = "";

    for(let j=0; j < alphabet.length; j++){
        if(j+i < alphabet.length)
            currentString += alphabet[j+i];
        else
            currentString += alphabet[j+i-alphabet.length];

    }

    alphabetTable.push(currentString);
}

function encrypt(text, encryptingKey){
    
    text = text.trim().toLowerCase();
    encryptingKey = encryptingKey.trim().toLowerCase();
    
    let col;
    let row; 

    let result = "";

    // Looping by chars in text
    let counter = 0;
    for(let i = 0; i < text.length; i++){
        
        // If char is not a letter
        if(!alphabet.includes(text[i]))
            continue;

       
        
        // Looking for a row
        alphabetTable.forEach(currAlphabet => {

            if(currAlphabet[0] == encryptingKey[counter]){
                row = alphabetTable.indexOf(currAlphabet);
            }

        });
        // Looking for a column
        col = alphabet.indexOf(text[i]);
        
        counter = (counter >= encryptingKey.length-1) ? 0 : counter+1;

        console.log("git: " + row, col, alphabetTable[row][col]);
        result += alphabetTable[row][col];
    }
    
    return result;
}

function decrypt(text, encryptingKey){
    
    let decryptedText = "";
    for(let i = 0; i < text.length; i++){

        // Looping by encrypting key (if it's shorter than text)
        let encKeyChar = encryptingKey[i%encryptingKey.length];
        console.log(encKeyChar);

        // Looking for a valid row
        alphabetTable.forEach(currAlphabet => {
            if(currAlphabet[0] == encKeyChar){
                console.log(currAlphabet);
                decryptedCharIndex = currAlphabet.indexOf(text[i]);
            }
        });text
        
        decryptedText += alphabet[decryptedCharIndex];
    }

    return decryptedText;
    
}

// Link a buttons

encryptBtn.addEventListener("click", ev =>{
    encryptedTextBox.value = encrypt(toEncryptedTextBox.value, encryptingKey);
});

// console.log(encryptingKey);

// console.log(encrypt("TO JEST BARDZO TAJNY TEKST", encryptingKey));
// console.table(alphabetTable);

console.log(decrypt("łińźet", encryptingKey));
