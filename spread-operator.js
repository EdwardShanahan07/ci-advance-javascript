// No spread operator

const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
console.log(arr2);

// Copying an array

const arr3 = [4, 5, 6];
const arr4 = [...arr3];
arr4.push(7);
console.log(arr3);
console.log(arr4);
