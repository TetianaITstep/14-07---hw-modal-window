// 1 spread
// const numbers = [1, 2, 3, 4, 5, 6];
// const numbers1 = [4, 32, 35, 64, 75, 86];
// const numbers2 = [61, 42, 453, 14, 15, 26];
// console.log(...numbers);

// // const newArrNumbers = numbers.concat(numbers1, numbers2);
// const newArrNumbers = [...numbers, 1000, ...numbers1, 454545, ...numbers2];

// console.log(newArrNumbers);

// const temps = [18, 14, 23, 34, 12];

// // const minTemps = Math.min(...temps);
// const minTemps = Math.min.apply(null, temps);
// console.log(minTemps);

// const obj1 = {
//   x: 1,
//   m: 2,
// };
// const obj2 = {
//   x: 5,
//   q: 10,
// };

// const newObj = { ...obj1, ...obj2, a: 15, arr: [1, 3, 3, 4, 5] };
// console.log(newObj);

const defaultSettings = {
  theme: "light",
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};
console.log(finalSettings);
