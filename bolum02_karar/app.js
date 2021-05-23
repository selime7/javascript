const s1 = prompt("Birinci Sayi: ");
const islem = prompt("Islemi giriniz");
const s2 = prompt("Ikinci Sayi: ");
let sonuc = 0;

if (islem == "+") {
  sonuc = s1 + s2;
} else if (islem == "-") {
  sonuc = s1 - s2;
} else if (islem == "*") {
  sonuc = s1 * s2;
} else if (islem == "/") {
  sonuc = s1 / s2;
} else {
  alert("yanlis islem yaptiniz.");
}
console.log(`${s1} ${islem} ${s2}=${sonuc}`);

/*====================================================*/
const age = prompt("yasinizi giriniz: ");
const healt = prompt("Saglikli misiniz y/n");
const result = age > 18 && healt == "e" ? "Askere gidebilir" : "Askere Gidemez";
console.log(result);
/*====================================================*/
const gunNo = Number(prompt("Gun sayinini giriniz: "));
switch (gunNo) {
  case 1:
    gunAdi = "Pazartesi";
    break;
  case 2:
    gunAdi = "Salı";
    break;
  case 3:
    gunAdi = "Çarşamba";
    break;
  case 4:
    gunAdi = "Perşembe";
    break;
  case 5:
    gunAdi = "Cuma";
    break;
  case 6:
    gunAdi = "Cumartesi";
    break;
  case 7:
    gunAdi = "Pazar";
    break;
  default:
    alert("Gün 1-7 arasında olmalıdır");
    break;
}
console.log(gunAdi);
/*=======================================================*/
/* 0-5 arasi %10
   6-10 arasi %20
   11 den sonrasi %50
   */
const maas = prompt("Maasinizi giriniz: ");
const sure = prompt("Calisma suresini giriniz: ");
const zamliMaas = sure > 10 ? maas * 1.5 : sure > 5 ? maas * 1.2 : maas * 1.1;
console.log(zamliMaas);
/*========================================================*/
const borc = 0;
const maas = 3000;
console.log(!borc && maas > 2825.9 ? "Kredi Alabilir 😂 " : "Kredi Alamaz 😪");
/* emoji koymak icin windows + .  */
