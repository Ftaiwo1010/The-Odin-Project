// JavaScript String Length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);


// Extracting String Characters

// JavaScript String charAt()
const charText = "Hello World";
let char = charText.charAt(0);
console.log(char);


// JavaScript String charCodeAt()
let codeText = charText.charCodeAt(0);
console.log(codeText);


// JavaScript String at()
const name = "W3Schools";
let letter = name.at(2);
console.log(letter);
console.log(name[2]);

console.log(name.at(-2));
console.log(charText.charAt(charText.length - 2));


// Property Access [ ]
console.log(name[0]);

name[0] = "A";
console.log(name); // Gives no error, but does not work


// Extracting String Parts

// JavaScript String slice()
let newText = "Apple, Banana, Kiwi";
let part = newText.slice(7, 13);
console.log(part);


console.log(newText.slice(7));
console.log(newText.slice(-12));
console.log(newText.slice(-12, -6));


// JavaScript String substring()
let str = "Apple, Banana, Kiwi";
let partStr = str.substring(7, 13);
console.log(partStr);
console.log(str.substring(7));


// Converting to Upper and Lower Case

// JavaScript String toUpperCase()
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log(text2);


// JavaScript String toLowerCase()
console.log(text2.toLowerCase());


// JavaScript String concat()
let text3 = "HEllo";
let text4 = 'World';
let text5 = text3.concat(" ", text4);
console.log(text5);


// JavaScript String trim()
let text6 = "      Hello World!      ";
let trimText = text6.trim();
console.log(trimText);


// JavaScript String Padding

// JavaScript String padStart()
let text7 = "5";
let padded1 = text7.padStart(4, "0");
console.log(padded1);
console.log(text7.padStart(4, "x"));

let numb = 5;
let convert = numb.toString();
let paddedText = convert.padStart(4, "0");
console.log(paddedText);


// JavaScript String padEnd()
console.log(text7.padEnd(4, "0"));
console.log(text7.padEnd(4, "x"));



// JavaScript String repeat()
console.log(text1.repeat(2));


// Replacing String Content
let text8 = "Please visit Microsoft!";
let newText1 = text8.replace("Microsoft", "W3Schools");
console.log(newText1);


// To replace case insensitive, use a regular expression with an /i flag (insensitive):
let newText2 = text8.replace(/MICROSOFT/i, "W3Schools");
console.log(newText2);


// To replace all matches, use a regular expression with a /g flag (global match):
let newText3 = text8.replace(/MICROSOFT/g, "W3Schools");
console.log(newText3);


// JavaScript String ReplaceAll()
let sentence1 = "I love cats, cats is a homy, cats are mild and gentle";
let replaceCat = sentence1.replaceAll("cats", "Dogs");
console.log(replaceCat);


// Converting a String to an Array

// JavaScript String split()
let split1 = sentence1.split(","); // Split on commas
let split2 = sentence1.split(" ");    // Split on spaces
let split3 = sentence1.split("|");    // Split on pipe
console.log(split1);
console.log(split2);
console.log(split3);






 



