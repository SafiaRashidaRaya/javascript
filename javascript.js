// let a = 2;
// let b = 3;
// let c = a+b;

// console.log(c);

let a =2;
let b =3;
let c =4;
let d =5;

// let e =a*c;
// let f =a*b*b;
// let g =e/f;
// let h =b+g+a-d;

let i = b+(a*c/a*b*b)+a-d;
console.log(i);

// 3+2*4/2*3*3+2-5

let x = 6;
let y = 5;
let hasil = x>y;
if(x>y){
    console.log("Benar.");
}else{
    console.log("Salah");
}

let nilai =81;
let kkm= 80;
if(nilai>kkm){
    console.log("Lulus.");
}else{
    console.log("Tidak Lulus.")
}

let bulan=1;
let tanggal=20;
let zodiak="Belum dibuat";

if(bulan==1){
    if(tanggal>0 && tanggal<20){
        zodiak="Capricorn";
    }
    if(tanggal>19 && tanggal<32){
        zodiak="Aquarius";
    }
}

if (bulan==2) {
    if (tanggal>0 && tanggal<18) {
        zodiak="Aquarius";
    }
    if (tanggal>18 && tanggal<32) {
        zodiak="Pisces";
    }
}

if (bulan==3) {
    if (tanggal>0 && tanggal<21) {
        zodiak="Pisces";
    }
    if (tanggal>20 && tanggal<32) {
        zodiak="Aries";
    }
}
if (bulan==4) {
    if (tanggal>0 && tanggal<20) {
        zodiak="Aries";
    }
    if (tanggal>19 && tanggal<32) {
        zodiak="Taurus";
    }
}
if (bulan==5) {
    if (tanggal>0 && tanggal<21) {
        zodiak="Taurus";
    }
    if (tanggal>20 && tanggal<32) {
        zodiak="Gemini";
    }
}
if (bulan==6) {
    if (tanggal>0 && tanggal<21) {
        zodiak="Gemini";
    }
    if (tanggal>20 && tanggal<32) {
        zodiak="Cancer";
    }
}
if (bulan==7) {
    if (tanggal>0 && tanggal<23) {
        zodiak="Cancer";
    }
    if (tanggal>22 && tanggal<32) {
        zodiak="Leo";
    }
}
if (bulan==8) {
    if (tanggal>0 && tanggal<23) {
        zodiak="Leo";
    }
    if (tanggal>22 && tanggal<32) {
        zodiak="Virgo";
    }
}
if (bulan==9) {
    if (tanggal>0 && tanggal<23) {
        zodiak="Virgo";
    }
    if (tanggal>22 && tanggal<32) {
        zodiak="Libra";
    }
}
if (bulan==10) {
    if (tanggal>0 && tanggal<23) {
        zodiak="Libra";
    }
    if (tanggal>22 && tanggal<32) {
        zodiak="Scorpio";
    }
}
if (bulan==11) {
    if (tanggal>0 && tanggal<22) {
        zodiak="Scorpio";
    }
    if (tanggal>21 && tanggal<32) {
        zodiak="Sagittarius";
    }
}
if (bulan==12) {
    if (tanggal>0 && tanggal<22) {
        zodiak="Sagittarius";
    }
    if (tanggal>21 && tanggal<32) {
        zodiak="Capricorn";
    }
}

console.log(zodiak);

