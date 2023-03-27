// Regular function call

const add2Numbers = (a, b) => a + b;

console.log(add2Numbers(1, 2));

// Extra arguments are ignored

console.log(add2Numbers(1, 2, 3));

// Function using ...rest

const sumRest = (a, b, ...rest) => {
  let sum = a + b;
  for (i of rest) {
    sum += i;
  }

  return sum;
};

console.log(sumRest(1, 2, 3, 4, 5));
