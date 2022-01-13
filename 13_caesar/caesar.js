const caesar = function(string, shift) {
    let phrase = '';
    let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
    let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]
    for (let i = 0; i < string.length; i++){
        let char = string[i];
        let shiftedChar = '';
        if (shift < 0 ){
            shift = -(Math.abs(shift) % upperCase.length);
        } else {
            shift = (Math.abs(shift) % upperCase.length);
        }
        if (upperCase.indexOf(char) > -1){
            // char is uppercase 
            let charPos = upperCase.indexOf(char);    
            if (charPos + shift >= upperCase.length){
                shiftedChar = upperCase[charPos+shift - upperCase.length];
            } else if (charPos + shift < 0){
                shiftedChar = upperCase[(upperCase.length + (shift)+ charPos)];
            } else {
                shiftedChar = upperCase[charPos + shift];
            }
            phrase += shiftedChar;
        } else if (lowerCase.indexOf(char) > -1){
            // char is lowercase
            let charPos = lowerCase.indexOf(char);
            if (charPos + shift >= lowerCase.length){
               shiftedChar = lowerCase[charPos+shift - lowerCase.length];
            } else if (charPos + shift < 0){
                shiftedChar = lowerCase[(charPos - (shift))];
            } else {
                shiftedChar = lowerCase[charPos + shift];
            }
            phrase += shiftedChar;
        } else {
            phrase += string[i];       
        }
    }
    return phrase;
};

// Do not edit below this line
module.exports = caesar;