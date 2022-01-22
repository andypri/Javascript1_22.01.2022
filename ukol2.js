console.log('funguju');

// Úkol 2.1:
// Přijměte jméno jako vstup od uživatele, dále nechte zadat jeho věk a vypište na základě věku jednu ze dvou vět ve tvaru:
// a) Vaše jméno je Marian, je vám 30 let a tak máte právo řídit auto.
// b) Vaše jméno je Marian, je vám 14 let a tak musíte počkat ještě 4 let, než budete moci řídit auto.

let jmenoUzivatele = prompt('Zadej své jméno.');
let vekUzivatele = Number(prompt('Zadej svůj věk.'));

if (vekUzivatele >= 18) {
  console.log(
    `Vaše jméno je ${jmenoUzivatele}, je Vám ${vekUzivatele} a tak máte právo řídit auto.`
  );
} else {
  let pocetLetDo18 = 18 - vekUzivatele;
  if (pocetLetDo18 === 1) {
    console.log(
      `Tvoje jméno je ${jmenoUzivatele}, je Ti ${vekUzivatele} a tak musíš počkat ještě ${pocetLetDo18} rok, než budeš moci řídit auto.`
    );
  } else if (pocetLetDo18 >= 2 && pocetLetDo18 <= 4) {
    console.log(
      `Tvoje jméno je ${jmenoUzivatele}, je Ti ${vekUzivatele} a tak musíš počkat ještě ${pocetLetDo18} roky, než budeš moci řídit auto.`
    );
  } else {
    console.log(
      `Tvoje jméno je ${jmenoUzivatele}, je Ti ${vekUzivatele} a tak musíš počkat ještě ${pocetLetDo18} let, než budeš moci řídit auto.`
    );
  }
}
