let text = "HELLO WORLD";
let letter1 = text.charAt();
let letter2 = text.charAt(1);
let letter3 = text.charAt(text.length - 1);
let letter4 = text.charAt(15);


console.log(text.length); // 11

console.log(letter1);
console.log(letter2); // E
console.log(letter3); // D
console.log(letter4); // empty string


// charAt() may return lone surrogates, which are not valid Unicode characters.
// const str = "𠮷𠮾";
// console.log(str.charAt(0));
// console.log(str.charAt(1));


// To get the full Unicode code point at the given index, use an indexing method that splits by Unicode code points, such as String.prototype.codePointAt() and spreading strings into an array of Unicode code points.
const str = "𠮷𠮾";
console.log(String.fromCodePoint(str.codePointAt(0))); // "𠮷"
console.log([...str][0]); // "𠮷"

// ! Note: Avoid re-implementing the solutions above using charAt(). The detection of lone surrogates and their pairing is complex, and built-in APIs may be more performant as they directly use the internal representation of the string. Install a polyfill for the APIs mentioned above if necessary.

/**
@JavaScript charAt() Method
The charAt() method returns the character at a specified index (position) in a string.

Syntax
string.charAt(index)

Parameters

1. index(Optional).
2. The index (position) of the character.
3. Default = 0.

Return Value

String --> The character at the specified index. Empty string ("") if the index is out of range.
*/