// Latihan 7: Higher Order Function
// Higher Order Function (HOF) adalah fungsi yang dapat menerima fungsi sebagai argument, atau mengembalikan fungsi sebagai hasil. Dalam JavaScript, konsep ini sering digunakan dalam callback, closure, dan functional programming

// Contoh-nya:
function panggil(nama,fungsi) {
    return fungsi(nama);
}

function sapa(nama) {
    return `Hai, nama saya ${nama}`;
}

console.info(panggil('Mita',sapa)) // output = Hai, nama saya Mita

// Dalam JavaScript function diperlakukan sebagai object

// function yang memuat argument fungsi didalam itu disebut higher order function, dan fungsi yang disimpan sebagai argument itu disebut Callback


// Mengapa kita harus menggunakan Higher Order Function? mengapa tidak menggunakan function biasa aja?
// Karena ada alasannya, alasannya karena Abstraksi yaitu membuat kode kita menjadi lebih sederhana atau lebih simpel, dengan menggunakan higher order function kita dapat menyembunyikan kerumitan dalam kode kita

// "Semakin besar sebuah program, semakin tinggi kompleksitasnya, semakin membingungkan programmer-nya"

// "Ada dua cara untuk merancang sebuah software: Cara pertama adalah untuk membuat program-nya se-sederhana mungkin sehingga jelas-jelas tidak ada kekurangan-nya, dan cara lainnya adalah untuk membuat program-nya se-kompleks mungkin sehingga tidak ada kekurangan yang jelas"

let total = 0, count = 1;
while(count <= 10) {
    total += count
    count += 1
}
console.info(total)

// Alasan lain, Semakin sering kita berkerja dengan function ini, nanti kita masuk disebuah pendekatan yang namanya Functional Programming.

// Ya itu saja catatan ku