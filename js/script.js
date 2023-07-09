const handleClick = (event) => {
  event.preventDefault();
  const textarea = document.querySelector("textarea");
  const text = textarea.value;
  let char = processingText(text);
  if (char === null) {
    char = "No unique char was found.";
  }
  const out = document.querySelector(".out");
  out.innerHTML = `FIRST-UNIQUE-CHAR: ${char}`;
  textarea.value = "";
};
const button = document.querySelector("button");
button.addEventListener("click", handleClick);

// DELETING-PUNCTUATION-MARKS
const delPunctuationMarks = (text) => {
  text = text.trim();
  let withoutLineFeed = text.split("\n").join(" ");
  let punctuationless = withoutLineFeed.replace(
    /[.,\/#><?!@$%"'\^&\*;:{}=\-+_`~()0-9]/g,
    ""
  );
  let finalString = punctuationless.replace(/\s{2,}/g, " ");
  let words = finalString.split(" ");
  return words;
};

// GETTING-FIRST-UNIQUE-CHAR
const getFirstUniqChar = (str) => {
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (!map.has(currentChar)) {
      map.set(currentChar, 0);
    }
    map.set(currentChar, map.get(currentChar) + 1);
  }
  for (let k = 0; k < str.length; k++) {
    if (map.get(str[k]) === 1) {
      return str[k];
    }
  }
  return null;
};

// PROCESSING-TEXT
const processingText = (text) => {
  if (typeof text !== "string" || text === "" || text.trim() === "") {
    return null;
  }
  let words = delPunctuationMarks(text);
  let chars = [];
  for (let i = 0; i < words.length; i++) {
    let char = getFirstUniqChar(words[i]);
    if (char !== null) {
      chars.push(char);
    }
  }
  let res = getFirstUniqChar(chars);
  return res;
};
