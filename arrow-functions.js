/**
 * To run this file in Gitpod, use the
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addTwoNumbers(a, b) {
//   return a + b
// }

// console.log(addTwoNumbers(1, 2))

// Single Line Arrow Function With Parameters

const addTwoNumbers = (a, b) => a + b

console.log(addTwoNumbers(1, 2))

// Implicit Returns

const sayHello = () => console.log("Hello")

sayHello()

// Returning Multiple Lines

const paragraph = () => {
  return `<p>
    Hello World!
    </p>`
}

console.log(paragraph())
