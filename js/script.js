
let anyText = `The Tao gave birth to machine language.  Machine language gave birth
to the assembler.
The assembler gave birth to the compiler.  Now there are ten thousand
languages.
Each language has its purpose, however humble.  Each language
expresses the Yin and Yang of software.  Each language has its place within
the Tao.
But do not program in COBOL if you can avoid it.
        -- Geoffrey James, "The Tao of Programming"`;


   
// GETTING-FIRST-UNIQUE-CHAR
const firstUniqChar = (str) => {
    console.log(typeof(str));
    let map = new Map();
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        if (!map.has(currentChar)) {
            map.set(currentChar, 0);
        }
        map.set(currentChar, map.get(currentChar) + 1);
    }
    console.log(map);
    for (let k = 0; k < str.length; k++) {
        if (map.get(str[k]) === 1) {
            return str[k];
        }
    }
    return null;
};

// DELETING-PUNCTUATION-MARKS
const delPunctuationMarks = (text) => {
    console.log(text);
    text = text.trim();
    let withoutLineFeed = text.split('\n').join(' ');
    let punctuationless = withoutLineFeed.replace(/[.,\/#><?!@$%"'\^&\*;:{}=\-+_`~()]/g, "");
    let finalString = punctuationless.replace(/\s{2,}/g, " ");
    let words = finalString.split(' ');
    console.log(words);
    return words;
};

// GETTING-UNIQUE-CHAR
const getUniqChar = (text) => {
    if (typeof (text) !== 'string' || text === '' || text.trim() === '') {
        return null;
    }
    let words = delPunctuationMarks(text);
    let chars = [];
    for (let i = 0; i < words.length; i++) {
        let char = firstUniqChar(words[i]);
        if (char !== null) {
            chars.push(char);
        }
    }
    let res = firstUniqChar(chars);
    return res;
};


console.log('RESULT:', getUniqChar(anyText));





// UNIT-TESTS
const assert = (actual, expected, errMsg) => {
    if (actual !== expected) {
        throw new Error(`${errMsg}, actual result: ${actual}, expected result: ${expected}`);
    }
};

// UNIT-TESTS-FOR-getUniqChar-FUNCTION
assert(getUniqChar('test'), 'e', 'getUniqChar unit-test #1 ERROR');
assert(getUniqChar('w'), 'w', 'getUniqChar unit-test #2 ERROR');
assert(getUniqChar(''), null, 'getUniqChar unit-test #3 ERROR');
assert(getUniqChar(123456), null, 'getUniqChar unit-test #4 ERROR');
assert(getUniqChar('        '), null, 'getUniqChar unit-test #5 ERROR');
assert(getUniqChar('aassdd'), null, 'getUniqChar unit-test #6 ERROR');
assert(getUniqChar('#%^&*-/)~+:>?'), null, 'getUniqChar unit-test #7 ERROR');

// UNIT-TESTS-FOR-delPunctuationMarks-FUNCTION
assert(delPunctuationMarks('t@.,!$^~&;:{}+-=e#s%t-_*').toString(), 'test', 'delPunctuationMarks unit-test #1 ERROR');
assert(delPunctuationMarks('        ').toString(), '', 'delPunctuationMarks unit-test #2 ERROR');
assert(delPunctuationMarks('w').toString(), 'w', 'delPunctuationMarks unit-test #3 ERROR');
assert(delPunctuationMarks('').toString(), '', 'delPunctuationMarks unit-test #4 ERROR');
assert(delPunctuationMarks('aassdd').toString(), 'aassdd', 'delPunctuationMarks unit-test #5 ERROR');
assert(delPunctuationMarks('#%^&*-/)~+:>?').toString(), '', 'delPunctuationMarks unit-test #6 ERROR');

// UNIT-TESTS-FOR-firstUniqChar-FUNCTION
assert(firstUniqChar('test'), 'e', 'firstUniqChar unit-test #1 ERROR');
assert(firstUniqChar('aassdd'), null, 'firstUniqChar unit-test #2 ERROR');

