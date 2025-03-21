// ============================
// Task 1: Obtaining String Length
// ============================
let message = "Hello, World!";
console.log("Original message:", message);
console.log("Length of message:", message.length); // 13

// ============================
// Task 2: Converting Cases
// ============================
let text = "Hello, World!";
console.log("Original text:", text);
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());

// ============================
// Task 3: Extracting Substrings
// ============================
let sentence = "The quick brown fox jumps over the lazy dog";
let extracted = sentence.substring(16, 19); // "fox"
console.log("Original sentence:", sentence);
console.log("Extracted substring (fox):", extracted);

// ============================
// Task 4: Splitting Strings
// ============================
let words = "The quick brown fox";
let wordArray = words.split(" ");
console.log("Original string:", words);
console.log("Split into words:", wordArray); // ["The", "quick", "brown", "fox"]
