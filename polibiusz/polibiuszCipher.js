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
    "        ",  // 0
    " aąbcćde",  // 1
    " ęfghijk",  // 2
    " lłmnńoó",  // 3
    " pqrsśtu",  // 4
    " vwxyzźż"]; // 5
//   01234567

function encrypt(text, encKeyA, encKeyB){
    
    text = text.toLowerCase().trim();
    let x = "";

    // Go through text
    for(let i = 0; i < text.length; i++){
        
        // Check if char is a letter
        if(alphabet.includes(text[i])){
            
            // Check in which table is this letter
            for(let row = 1; row < alphabetTable.length; row++){

                if(alphabetTable[row].indexOf(text[i]) != -1 && alphabetTable[row].indexOf(text[i]) != 0){
                    let col = alphabetTable[row].indexOf(text[i]);
                    
                    x += `${row}${col}`;
                }
                
            }
        }
    }

    // -- Level 2 of encoding add encrypting key
    // before encrypting with key = x
    // after encrypting with key = y
    // encKeyA = a
    // encKeyB = b
    // y = ax + b

    let y = (parseFloat(encKeyA * x)) + parseFloat(encKeyB);

    return y;
}

function decrypt(encText, encKeyA, encKeyB){
    
    // Delete white spaces
    let y = encText.trim();

    let result = "";

    /// -- Level 2 of encoding remove encrypting key
    // before decrypting with key = y
    // after decrypting with key = x
    // encKeyA = a
    // encKeyB = b
    // x = (y / a) - b

    let x = ((y / encKeyA) - parseFloat(encKeyB)).toString();

    // Go through encrypted text
    for(let i = 0; i < x.length; i+=2){
        
        // Check paired numbers
        if(x[i+1] == undefined){
            break;
        }
        
        let row = x[i];
        let col = x[i+1];
        
        // Check if number is in a range
        if(row < alphabetTable.length && col < alphabetTable[1].length)
            result += alphabetTable[row][col];
    }

    return result;
}


encryptBtn.addEventListener("click", e => {
    let text = toEncryptedTextBox.value;
    let a = document.querySelector("#encKeyA").value;
    let b = document.querySelector("#encKeyB").value;
    
    if(text && a && b)
        encryptedTextBox.value = encrypt(text, a, b);
})

decryptBtn.addEventListener("click", e => {
    let text = toDecryptedTextBox.value;
    let a = document.querySelector("#decKeyA").value;
    let b = document.querySelector("#decKeyB").value;
    
    console.log(text, a, b);
    // if(text && a && b)
        decryptedTextBox.value = decrypt(text, a, b);
})



// encrypt("Siema", 1, 1);
console.log(decrypt("442517331200", 100, 100));