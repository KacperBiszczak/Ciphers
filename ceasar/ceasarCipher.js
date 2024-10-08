const encryptedTextBox = document.querySelector("#encryptedTextBox");
const decryptedTextBox = document.querySelector("#decryptedTextBox");

const alphabet = "aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż";

// Setting encryption key (encKey > 0) = encryption, (encKey < 0) = decryption
function encrypt(text, encryptionKey)
{

    // If encryption key is less than zero (decryption)
    if(encryptionKey < 0)
    {
        encryptionKey = encryptionKey%35 + 35;
    }

    let result = "";
    let currentCharIndex;

    // Trim white spaces
    text = text.trim().toLowerCase();

    
    Array.from(text).forEach(character => {
        
        // Check if char is a letter
        if(alphabet.includes(character))
        {
            currentCharIndex = alphabet.indexOf(character);
            result += alphabet[(currentCharIndex+encryptionKey)%35];
        }

    });

    return result;
}

const encryptBtn = document.querySelector("#encryptBtn");
const decryptBtn = document.querySelector("#decryptBtn");

encryptBtn.addEventListener("click", e =>{
    let toEncryptedText = document.querySelector("#toEncryptedTextBox").value;

    encryptedTextBox.value = encrypt(toEncryptedText, 3);
})

decryptBtn.addEventListener("click", e =>{
    let toDecryptedText = document.querySelector("#toDecryptedTextBox").value;

    decryptedTextBox.value = encrypt(toDecryptedText, -3);
})