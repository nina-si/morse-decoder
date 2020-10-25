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

function decode(s) {
  let result = '';
  for (let i = 0; i < s.length; i += 10) {
    let wrd = s.substring(i, i+10);
    if (!wrd) break;
    result += decodeChar(wrd);
  }
  return result;
}

decodeChar = function(s) {			
  if (s == '**********')
    return ' ';
  s = s.trimStart('0');
  s = s.replace(/^0+/g, '');
  let code = '';
  for (let i = 0; i < s.length; i += 2) {
    let wrd = s.substring(i, i+2);
    console.log(wrd);
    if (!wrd) break;
    if (wrd == '10') code += '.';
    else code += '-';
  }
  return MORSE_TABLE[code];
}

module.exports = {
    decode
}