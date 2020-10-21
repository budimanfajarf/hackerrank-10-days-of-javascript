'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function isVowel(c) {
    if (c == 'a' || c == 'i' || c == 'u' || c == 'e' || c =='o')
        return true;
    else
        return false;
}

function vowelsAndConsonants(s) {
    let vowel = [];
    let nonVowel = [];

    for (let i = 0; i < s.length; i++) {
        isVowel(s[i]) ? vowel.push(s[i]) : nonVowel.push(s[i]);
    }

    for (let i = 0; i < vowel.length; i++) {
        console.log(vowel[i]);
    }

    for (let i = 0; i < nonVowel.length; i++) {
        console.log(nonVowel[i]);
    }
}
