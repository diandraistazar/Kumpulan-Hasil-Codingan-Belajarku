// Else if: memungkin kan kita untuk menambah satu lagi kondisi selain kondisi dari if, jadi terdapat 2 kondisi.
var angka = prompt('Masukkan Angka: ');

// Program akan melakukan penghitungan angka dibagi dan diambil sisanya, lalu dibandingkan dengan angka 0
if ( angka % 2 == 0 ) {
    alert( 'Angka ' + angka + ' bilangan GENAP');
} 

// Program akan melakukan perhitungan angka dibagi dan diambil sisanya, lalu dibandingkan dengan angka 1

// Bingung, mengapa angka dibagi dan diambil sisanya, lalu dibandingkan dengan angka 1, bukannya bisa saja hasil dari pembagiannya 3, 4, 5, 6 atau seterusnya.
// Sepertinya kamu tidak mengerti, mengapa karena kita menggunakan angka 2 untuk pembagian, dimana-dimana jika kamu membagi sebuah angka dengan angka 2, baik itu satuan, puluhan, ratusan, ribuan dan seterusnya, dan terdapat sisa, pasti sisanya itu hanya 1
// Why? karena, Ini btw perinsip ku aja ya, angka 2 yang kita gunakan untuk membagi, dan jika digunakan untuk membagi angka-angka yang banyak, dan menghasilkan sisa angka 1. Jika terdapat sisa dalam pembagian dari angka 2 tersebut, sisanya dibawah angka. Contoh Angka 2, jika digunakan dan menghasilkan sisa 1, karena belakang angka 2 itu adalah hanya angka 1. Contoh lagi, 6 % 4 hasilnya 2, sisanya dari angka ada dibelakang angka yang digunakan untuk membagi, jika angka 4 digunakan, maka dibelakangnya 3, 2, dan 1, ketiga angka tersebut kemungkinan akan keluar dari hasil pembagian sisa.
else if ( angka % 2 == 1 ) {
    alert( 'Angka ' + angka + ' bilangan GANJIL' );
}

// Jika 2 kondisi diatas masih tetap tidak terpenuhi, maka else akan dijalankan
else {
    alert('Wahh Harus Angka mas :(');
}