/*=============DONGULER======================*/
for (let i = 1; i <= 10; i++) {
  console.log(`${i}- Mehmet`);
}

/*===========================================================================*/
const sayi = prompt("Dongu miktarini giriniz :");

for (let i = 1; i <= sayi; i++) {
  console.log(`${i}- Ruya`);
}

/*=================================Asal sayi ==========================================*/

const sayi1 = Number(prompt("bir sayi giriniz :"));

let asal = true;
for (let i = 2; i < sayi1; i++) {
  if (sayi1 % i == 0) {
    asal = false;
    break;
  }
}
const sonuc = asal ? "Asal" : "Asal Degil";
console.log(sonuc);

/*========================DO WHILE===================================*/
/*do while ile */
let not;
do {
  not = prompt("0-100 arasında bir not giriniz: ");
} while (not < 0 || not > 100);

console.log("Giridiğiniz not 0-100 arasındadır");

/*while ile*/
let not1;
not1 = prompt("0-100 arasında bir not giriniz: ");
while (not1 < 0 || not1 > 100) {
  console.error("Girilen not 0-100 arasinda olmalidir.");
  not1 = prompt("0-100 arasında bir not giriniz: ");
}
console.log("Giridiğiniz not 0-100 arasındadır");

/*==================================
Ornek : klavyeden Q karakteri girilene kadar not girisi yapan bir programi dondu kullanarak yaziniz
==============================*/
let not2;
let i = 1;

while (true) {
  not2 = prompt(i + ".kisinin notunu giriniz: ");
  not2 = not2.toLowerCase();
  if (not2 == "q") {
    break;
  }
  i++;
  console.log(Number(not2));
}
