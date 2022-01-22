// // Úkol 4.1:
// // Napište funkci, která vypíše součet, rozdíl, násobek a podíl 2 zadaných čísel, rozdíl zobrazte jako absolutni hodnotu.
// // Absolutní hodnota: Math.abs()

function pocetniOperace(cislo1, cislo2) {
  console.log(cislo1 + cislo2); // vypiš do konzole součet
  console.log(Math.abs(cislo1 - cislo2)); // rozdíl
  console.log(cislo1 * cislo2); // násobek
  console.log(cislo1 / cislo2); // rozdíl
}

pocetniOperace(1, 4);
// console.log(1, 4)

// Úkol 4.2:
// Napište funkci, která vypíše informaci, zda zadané číslo je nebo není prvočíslo.
// Nápověda:
//     • Prvočíslo je dělitelné pouze 1 a samo sebou.
//     • Lze použít zbytek po dělení – modulo (%).
//     • V první moment předpokládejme, ze číslo JE prvočíslo a budeme případně rozporovat toto tvrzení.

function jeCisloPrvocislo(cislo) {
  let jePrvocislo = true;
  for (let i = 2; i < cislo; i++) {
    if (cislo % i === 0) {
      jePrvocislo = false;
      break;
    }
  }
  return jePrvocislo;
}

let cislo = Number(prompt('Zadej číslo:'));
if (jeCisloPrvocislo(cislo)) {
  console.log('Číslo je prvočíslo');
} else {
  console.log('Číslo není prvočíslo');
}
