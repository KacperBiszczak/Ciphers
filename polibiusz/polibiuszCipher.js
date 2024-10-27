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
const alphabetTable = [
    "--------",  // 0
    "-aąbcćde",  // 1
    "-ęfghijk",  // 2
    "-lłmnńoó",  // 3
    "-pqrsśtu",  // 4
    "-vwxyzźż"]; // 5
//   01234567

function encrypt(text, encKeyA, encKeyB){
    
    text = text.toLowerCase().trim();
    let result = "";

    // Go through text
    for(let i = 0; i < text.length; i++){
        
        // Check if char is a letter
        if(alphabet.includes(text[i])){
            
            // Check in which table is this letter
            for(let row = 1; row <= 5; row++){
                if(alphabetTable[row].indexOf(text[i]) != -1){
                    let col = alphabetTable[row].indexOf(text[i]);
                    
                    result += `${row}${col}`;
                }
                
            }
        }
    }
    
    return result;
}

function decrypt(encText, encKeyA, encKeyB){
    
    encText = encText.trim();
    let result = "";

    for(let i = 0; i < encText.length; i+=2){
        
        if(encText[i+1] == undefined){
            break;
        }
        
        let row = encText[i];
        let col = encText[i+1];

        result += alphabetTable[row][col];
    }

    return result;
}


encryptBtn.addEventListener("click", e => {
    encryptedTextBox.value = encrypt(toEncryptedTextBox.value);
})

decryptBtn.addEventListener("click", e => {
    decryptedTextBox.value = decrypt(toDecryptedTextBox.value);
})



encrypt("Siema", 1, 1);
console.log(decrypt("2343363354312523171", 1, 1));