let vize1=Number(prompt(' Vize 1 Notunuzu giriniz'));
let vize2=Number(prompt(' Vize 2 Notunuzu giriniz'));
let final=Number(prompt(' Final Notunuzu giriniz'));

let ortalama=(vize1*0.3) + (vize2*0.3) + (final*0.4);

if(ortalama>=85){
    alert( `Tebrikler dersinizi AA ile geçtiniz-->${ortalama}`);
console.log('Tebrikler dersinizi geçtiniz-->'+ ortalama);
}
else if(74< ortalama){
    alert(`Tebrikler dersinizi BA ile geçtiniz-->${ortalama}`);
console.log('Tebrikler dersinizi geçtiniz-->'+ ortalama);
}
else if(70< ortalama){
    alert( `Tebrikler dersinizi CB ile geçtiniz-->${ortalama}`);
console.log('Tebrikler dersinizi geçtiniz-->'+ ortalama);
}
else if(60< ortalama){
    alert( `Tebrikler dersinizi CC ile geçtiniz-->${ortalama}`);
console.log('Tebrikler dersinizi geçtiniz-->'+ ortalama);
}
else if(50< ortalama){
    alert( `Ortalamanız 60 altında  olduğu için DD ile kaldınız-->${ortalama}`);
console.log('Ortalamanız 60 altında olduğu için DD ile kaldınız'+ ortalama);
}
else {
alert(`Ortalamanız 50 altında olduğu için FF ile kaldınız-->${ortalama}`);
console.log('Ortalamanız 50 altında olduğu için FF ile kaldınız-->'+ ortalama);
}
