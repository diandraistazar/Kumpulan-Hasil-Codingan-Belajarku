// Latihan 20: Mempelajari Method ForEach dan Map

// Penjelasan Method Foreach dan Map

// 1. Foreach
var nama = ["Diandra", "Mita", "Kind Mita", "Cappie"];

nama.forEach(function(name) {
    console.info("Halo, nama saya " + name)
})

// Semacam melakukan fungsi ke setiap element yang berada didalam Array, bisa di lihat aku melakukan console.info ke setiap element dalam Array nama. Jadi pengulangna ini akan berhenti jika elementnya selesai atau mencapai akhir.

var angka = [1, 2, 3];
var hasil = 0;

angka.forEach(function(angka) {
    hasil += angka
})

console.info(hasil)

// Hasil dari method tersebut adalah 6, aku menambahkan 1 + 2 + 3 = 6

// forEach memberikan 3 argument kepada function, yaitu element, index, dan array



// 2. Map
var hitung = [5,10,2];
var hasil = hitung.map(function(hitung) {
    return hitung * 2;
})

console.info(hasil)



// 3. Sort
var angka5 = [1,30,,3,2,50,54];
angka5.sort(function(a,b) {
    return a-b
})

console.info(angka5)

// Berfungsi untuk mengurutkan element Array
// a-b disini bukan pengurangan melainkan pengurutan dalam sort()