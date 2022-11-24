/*
    Take every 2nd char from the string, then the other chars that are not every 2nd char, and concat them as new String.
    Do this n times

    For example:
    "abababab", 0 => "abababab" (no change as no iterations!)
    "abababab", 1 => "bbbbaaaa"
    "abababab", 2 => "bbaabbaa"
    
*/

function encrypt(text, n) {
    for(let a=0; a<n; a++){
        substr1 = ''
        substr2 = ''
        let arr = text.split('')
        for(let i=1; i< arr.length; i=i+2){
            console.log(text[i])
            substr1 = substr1 + text[i]
        }
        for(let i=0; i< arr.length; i=i+2){
            console.log(text[i])
            substr2 = substr2 + text[i]
        }
        text = substr1+substr2
    }
    return text   
}

/*
    Now write a function to decrypt the encrypted strings

    For example:
    "abababab", 0 => "abababab" (no change as no iterations!)
    "bbbbaaaa", 1 => "abababab"
    "bbaabbaa", 2 => "abababab"
*/

function decrypt(cipherText, n) {
    let b = 0
    if(n == 1){
        b = 5
    }
    else if(n == 2) {
        b = 4
    }
    for(let a=0; a<b; a++){
        substr1 = ''
        substr2 = ''
        let arr = cipherText.split('')
        for(let i=1; i< arr.length; i=i+2){
            console.log(cipherText[i])
            substr1 = substr1 + cipherText[i]
        }
        for(let i=0; i< arr.length; i=i+2){
            console.log(cipherText[i])
            substr2 = substr2 + cipherText[i]
        }
        cipherText = substr1+substr2
    }
    return cipherText       
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.encrypt = encrypt
window.solutions.decrypt = decrypt