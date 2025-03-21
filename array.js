// ============================
// Task 1: Adding and Removing Elements
// ============================
let fruits = ['apple', 'banana', 'orange'];

console.log("Original fruits:", fruits);

// Add a new fruit using push
fruits.push('grape');
console.log("After push:", fruits);

// Remove the last fruit using pop
let removedFruit = fruits.pop();
console.log("After pop:", fruits);
console.log("Removed fruit:", removedFruit);

// ============================
// Task 2: Sorting Arrays
// ============================
let numbers = [3, 1, 5, 2, 4];

console.log("Original numbers:", numbers);

// Sort in ascending order
numbers.sort((a, b) => a - b);
console.log("Sorted numbers:", numbers);

// ============================
// Task 3: Applying Array Methods
// ============================
let numArray = [3, 1, 5, 2, 4];

console.log("Original numArray:", numArray);

// Use map to double each number
let doubled = numArray.map(num => num * 2);
console.log("Doubled numbers (map):", doubled);

// Use filter to keep only even numbers
let evenNumbers = numArray.filter(num => num % 2 === 0);
console.log("Even numbers (filter):", evenNumbers);

// Use reduce to calculate the sum
let sum = numArray.reduce((total, current) => total + current, 0);
console.log("Sum of numbers (reduce):", sum);

// ============================
// Bonus: Spread and Rest Operators
// ============================

// Spread: Cloning and adding elements
let moreFruits = [...fruits, 'kiwi', 'mango'];
console.log("Using spread operator (moreFruits):", moreFruits);

// Rest: Function that takes any number of arguments
function totalSum(...nums) {
    return nums.reduce((acc, n) => acc + n, 0);
}
console.log("Using rest operator (totalSum):", totalSum(1, 2, 3, 4, 5)); // 15
