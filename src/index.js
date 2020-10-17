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
    'space':  ' ',
};

function decode(expr) { // пришла строка
    
    let chars = []; 
    for (let i = 0; i < expr.length; i = i + 10) { 
        chars.push(expr.slice(i, i + 10));
    }
    //console.log(chars)
    // набиваем chars (массив, внутри каждой ячейки 10 цифр 0 и 1 (каждая ячейка = буква))

    let newArr = []; // этот массив мы забьем морзянкой (каждая ячейка = буква)
    let newStr = '';

    for (let i = 0; i < chars.length; i++) { // перебирает ячейки массива (1-2-3)
        newStr = '';
        //console.log(chars[i])
        // ячейка i длиной 10 цифр уходит внутрь
        for (let j = 0; j < 10; j = j + 2) { // идет по ячейке массива
            //console.log(arr[i].length)
            //console.log(chars[i].slice(j, j + 2));
             if (chars[i].includes('*')) {
                newStr = newStr + 'space';
                break;
            } else if (chars[i].slice(j, j + 2) == '10') {
                newStr = newStr + '.';
                //console.log(newStr);
            } else if (chars[i].slice(j, j + 2) == '11') {
                newStr = newStr + '-';
                //console.log('tyt');
            } else {
                
            }
            
        }
        newArr.push(newStr);
        
    }
    //console.log(newStr);
    //console.log(newArr);
    let resultArray = [];
    newArr.forEach((word) => resultArray.push(MORSE_TABLE[word]));
    //console.log(resultArray);
    return resultArray.join('');
}

module.exports = {
    decode
}