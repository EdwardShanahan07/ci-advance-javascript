// Destructuring arrays

const ages = [19, 20, 21];

// const john = ages[0];
// const mary = ages[1];
// const joe = ages[2];

let [john, mary, joe] = ages;

console.log(john, mary, joe);

// Destructuring objects

let jobs = {
  mike: "Web Developer",
  ellie: "Designer",
  tom: "Back-end Developer",
};

const { mike, ellie, tom } = jobs;

console.log(mike, ellie, tom);
