/*=============================================================================================*/
/**                                          FONKSIYONLAR                                   ***/
/*===========================================================================================*/
// ! 1.YONTEM   : FUNCTION DECLARATION
// fonksiyonun tanimlanmasi
function yazdir() {
  console.log("Ruya");
}
yazdir(); // fonksiyon cagrilmasi
/*------------------------------------------------------------------------------------------*/
//ornek : Parametreli Fonksiyon
function yazdirAd(ad, yas) {
  console.log(`Adiniz ${ad} yasiniz ${yas}`);
}
yazdirAd("Adam", 23); //call| invoke
yazdirAd("Josept", 21); // call | invoke

// Ornek : parametreli donus degerli fonksiyon
function yasHesapla(dogumyili) {
  return 2021 - dogumyili;
}

console.log(`Yasiniz : ${yasHesapla(1990)}`);
alert(`yasiniz : ${yasHesapla(1991)}`);
const yas = yasHesapla(1992);
console.log(`yasiniz ${yas}`);

// Ornek : klavyede girilen sayinin tek mi cift mi oldugunu dondurn bir fonksiyon  yaziniz
// !--------benim cozumum--------*/
const sayi = prompt("bir sayi giriniz :");
function tekMiCiftMi(sayi) {
  return sayi % 2 == 0 ? "cifttir" : "tektir";
}
const sonuc = tekMiCiftMi(sayi);
console.log(`girdiginiz: ${sayi} ${sonuc}`);

//!-----------hocanin cozumu-----------------*/
/*console.log(tekcift(sayiniz));*/
// function declaration yontemi ile fonksiyon tanimlanmasi cagrilmasindan once veya sonra olabilir
// sadece bu yontemde var
const sayiniz = prompt("bir sayi giriniz :");
function tekcift(sayiniz) {
  const sonuc1 = sayiniz % 2 == 0 ? `${sayiniz} Cifttir` : `${sayiniz} Tektir`;
  return sonuc1;
}
console.log(tekcift(sayiniz));

//! 2.YONTEM :FUNCTION EXPRESSION
// 1.yontemden daha cok kullanisli
const tekcift1 = function (sayiniz) {
  return sayiniz % 2 == 0 ? "Cifttir" : "Tektir";
};
console.log(`sayi ` + tekcift1(5)); // invoke

// Ornek : buyuk sayiyi bulunuz

let buyukBul = function (x, y, z) {
  let enBuyuk;
  if (x > y && x > z) {
    enBuyuk = x;
  } else if (y > x && y > z) {
    enBuyuk = y;
  } else if (z > x && z > y) {
    enBuyuk = z;
  }
  return enBuyuk;
};
console.log(`En buyuk: ` + buyukBul(5, 3, 8));
/*  2.YOL--------------------------------------------------------*/

const buyukBul1 = function (x, y, z) {
  let sonuc = x > y ? (x > z ? x : z) : y > z ? y : z;
  return sonuc;
};
console.log(`En buyuk1 : ` + buyukBul1(6, 1, 4));

//! 3.YONTEM ARROW(OK) FONKSIYONLARI
const topla = (a, b) => a + b; // Arrow fonk tanimlamasi

console.log(topla(5, 2)); // invoke
console.log(topla(3, 10)); // invoke

// Ornek
const ciftMi = (sayi) => (sayi % 2 == 0 ? "çift" : "tek");
console.log(ciftMi(5));
console.log(ciftMi(2));

// Ornek : us alma
const taban = prompt("taban giriniz : ");
const us = prompt("us giriniz : ");
const usAl = (t, u) => t ** u;
console.log(usAl(taban, us));

//Ornek : Menu
//! ok fonk birden fazla ifade var ise fonksiyonda suslu parantez kullanilmalidir

const menu = () => {
  console.log("==================================================");
  console.log("             JAVASCRIPT DERSI                     ");
  console.log("==================================================");
};
menu();

// Ornek
const KisiBilgileri = (ad, soyad, dogumyili) => {
  const bilgiler = `Ad : ${ad}, Soyad : ${soyad} Yas :${2021 - dogumyili}`;
  return bilgiler;
};
console.log(KisiBilgileri("Ruya", "Aksel", 1992));

/* 2.yol*/
const bilgiVer = (ad, soyad, dogum) =>
  console.log(`Adım ${ad}, Soyadım ${soyad}, Yaşım ${2021 - dogum}`);
console.log(bilgiVer("Ruya", "Aksel", 1992));

// Ornek : Silindirin hacmini hesaplayan bir fonksion yaziniz

const r = prompt("Yaricapi giriniz : ");
const h = prompt("Yukseklik giriniz : ");

const hacimHesapla = (r, h) => Math.PI * r * r * h;
// en yakin sayiya yuvarlar
console.log("Silindirin hacmi :" + Math.round(hacimHesapla(r, h)));
// virgulden sonra 2 basamak alir
console.log("Silindirin hacmi :" + hacimHesapla(r, h).toFixed(2));
