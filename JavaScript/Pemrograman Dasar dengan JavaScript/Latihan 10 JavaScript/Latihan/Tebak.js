// Game Tebak Angka buatan Diandra dan ❤Mita
var start = true;

while( start ) {

// Angka yang ditebak
var k = Math.random(); //Angka Random antara 0 - 1

// Melakukan Perhitungan
if(k < 0.1) {
    k = 1;
}

else if (k >= 0.1 && k < 0.2) {
    k = 2;
}

else if (k >= 0.2 && k < 0.3) {
    k = 3;
}

else if (k >= 0.3 && k < 0.4) {
    k = 4;
}

else if (k >= 0.4 && k < 0.5) {
    k = 5;
}

else if (k >= 0.5 && k < 0.6) {
    k = 6;
}

else if (k >= 0.6 && k < 0.7) {
    k = 7;
}

else if (k >= 0.7 && k < 0.8) {
    k = 8;
}

else if (k >= 0.8 && k < 0.9) {
    k = 9;
}

else {
    k = 10;
}


// Pengulangan
for(var i = 5; i >= 0; i--) {
// Angka Tebakan Player
var p = Number(prompt("Masukkan Angka Tebakanmu 1-10 :"))

// Dilakukan Perbandingan
var hasil = "";

if(p == k) {
    i = 0;
}

else if (p == 0) {
    alert("Angka " + p + " enggak termasuk ye\nKesempatanmu tersisa " + i)
}

else if(p > 10) {
    alert("Angka " + p + " kebesaran kocakk!\nKesempatanmu tersisa " + i)
}

else if(p < 1) {
    alert("Angka " + p + " kekecilan kocakk!\nKesempatanmu tersisa " + i)
}

else if(p < k) {
    alert("Angka yang dimasukkan Lebih Kecil dibandingkan angka yang ditebak\nKesempatanmu tersisa " + i);
}

else if(p > k) {
    alert("Angka yang dimasukkan Lebih Besar dibandingkan angka yang ditebak\nKesempatanmu tersisa " + i);
}


else {
    alert("Angka yang dimasukkan tidak valid\nKesempatanmu tersisa " + i);
}

}

// Hasil
if(p == k) {
    alert("Tebakanmu BENAR!\nAngka yang benar adalah " + k + "!")

}

else {
    alert("Wah sayangnya kamu kalah ya :3, terlalu cupu soalnya")
}

// Apakah ingin bermain lagi?
start = confirm("Apakah kamu ingin bermain lagi ?")

if(start == true) {
    start = true;
}

else {
    start = false;
}

}

// Penutupan
alert("Terima Kasih Sudah Bermain :)")
alert("Aku harap kamu menyukai game simpel buatan kami :)\n\nBy: ❤Mita & Diandra :3")