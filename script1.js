// Task 16: Loops

// 1. Display even numbers up to n
let n = parseInt(prompt("Enter a number:"));
console.log("Even numbers up to " + n + ":");
for (let i = 2; i <= n; i += 2) {
    console.log(i);
}

// 2. Ask user for input, check vowel or consonant
let ch = prompt("Enter a character:").toLowerCase();
if ("aeiou".includes(ch)) {
    console.log(ch + " is a vowel");
} else {
    console.log(ch + " is a consonant");
}

// 3. Count even and odd numbers from 1 to 999
let evenCount = 0, oddCount = 0;
for (let i = 1; i <= 999; i++) {
    (i % 2 === 0) ? evenCount++ : oddCount++;
}
console.log("Even count:", evenCount, "Odd count:", oddCount);

// 4. Count occurrence of a character in string
let str = "hello";
let charToCheck = "l";
let count = 0;
for (let char of str) {
    if (char === charToCheck) count++;
}
console.log(`Count of '${charToCheck}' in "${str}" is:`, count);

// 5. Sum and average of array
let arr = [1, 9, 8];
let sum = 0;
for (let i of arr) {
    sum += i;
}
console.log("Sum:", sum, "Average:", sum / arr.length);

// 6. Largest number in an array
let max = arr[0];
for (let i of arr) {
    if (i > max) max = i;
}
console.log("Largest number:", max);
