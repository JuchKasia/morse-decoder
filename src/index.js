const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};



function decode(expr) {
    let result = '';
    for (let i = 0; i < expr.length; i+=10) {
        let  symbol = expr.slice(i, i + 10)
        result += symbol == '**********' ? ' ' : MORSE_TABLE[getMorseSymbol(symbol)];
    }
    return result;
}

let getMorseSymbol = function(symbol) {
    let result = '';
    for(let i=0; i< symbol.length; i += 2) {
        switch(symbol.slice(i, i + 2)) {
            case '00':
                result += '';
                break;
            case '10':
                result += '.';
                break;
            case '11':
                result += '-';
                break;
        }
    }
    return result;
}

module.exports = {
    decode
}