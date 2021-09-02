const slider = document.getElementById("passwordLength");
const num = document.getElementById("lengthValue");
const passOutput = document.getElementById("passwordOutput");
num.innerHTML = slider.value;

function numChange() {
    num.innerHTML = slider.value;
}

function randomNum(){
    return Math.floor(Math.random() * 9);
}

function randomUpperCase(){
    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let random = Math.floor(Math.random() * upperCase.length);
    return upperCase[random];
}

function randomLowerCase(){
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    let random = Math.floor(Math.random() * lowerCase.length);
    return lowerCase[random];
}

function randomSpecialChar(){
    let specialChar = '!@?#$&*#';
    let random = Math.floor(Math.random() * specialChar.length);
    return specialChar[random];
}

function generatePassword(){
    let newPassword = ""

    for(i = 0; i < slider.value; i++){
        ranNum = Math.floor(Math.random() * 4);

        if (ranNum == 1) {
            newPassword += randomNum();
        } else if (ranNum == 2) {
            newPassword += randomUpperCase();
        } else if (ranNum == 3){
            newPassword += randomLowerCase();
        } else{
            newPassword += randomSpecialChar();
        }
    }

    passOutput.innerHTML = newPassword;
}