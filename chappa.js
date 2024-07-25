'use strict'
//to'g'ri o'zini maxsus KALIT KODI BOR EDI LEKIN MEN FORDA QILGIM KELKDI
// let b='string'
// console.log()
// for(let w=-1;w>=-b.length;w--){   //index manfiy olmas ekan :(
//     console.log(b)
// }
//zato oxiridan musbat index bo'yicha oldim misol oxiri 5 index bilan tugasa 5 ,4 ,3 ,2 ,1 ,0 qildim
let d=prompt('XOHLAGAN TEXTMI SONMI KIRITING BARIBIR CHAPPA CHIQARIB BERADI:))')
let b = `${d}`;
let a=''
for (let i = b.length-1; i >= 0; i--) {
    a=a+b[i]
}
alert(a)
alert("Fqat o'zbek alifbosidagi harf birikmalariga to'g'ri kelmaydi:(")
//niceee