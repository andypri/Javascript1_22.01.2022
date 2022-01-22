// console.log('Ahoj');

let jmeno = 'Andrea';
let vek = 33;
let vahaVKg = 55;
let vyskaVMetrech = 1.71;

let bmi = Math.round((vahaVKg / vyskaVMetrech ** 2) * 100) / 100;
console.log(bmi);

console.log(
  'Jmenuji se ' +
    jmeno +
    ', je mi ' +
    vek +
    'let, vážím ' +
    vahaVKg +
    'kg, měřím ' +
    vyskaVMetrech +
    'm a moje BMI je ' +
    bmi +
    '.'
);

console.log(
  `Jmenuji se ${jmeno}, je mi ${vek} let, vážím ${vahaVKg} kg, měřím ${vyskaVMetrech}m a moje BMI je ${bmi}.`
);
