// Latihan 9: Kali ini aku akan latihan membuat Pengulangan dan Pengkondisian secara bersarang. Omaygyattttt, ngeri boy.

// Hal yang pertama dilakukan adalah disuruh untuk membuat 
// ***** (membuat 5 bintang di console JavaScript)
console.log("*****");
// Pasti kalian akan berpikir untuk membuat nya dengan console.log("*****"). Hasilnya memang benar, cuman kurang efektif. 

// Cara yang efektif untuk membuatnya yakni menggunakan Pengulangan atau Loop For dan While
// Berikut penerapan penggunaanya!

// While (Loop)
// Lebih Panjang

var s = "";
var i = 1;

while( i <= 5 ) {
    s += "*"
i += 1;
}
console.log(s)
// Mengapa tidak langsung mengisi "*" du var s = ""? karena jika diisi langsung, yang terjadi, jika kita mengulangn "*" selama 5 kali, yang seharusnya hasilnya 5 bintang tapi jadi 6, karena ditambah di var s nya. Agar hasilnya sesuai lebih baik kosongkan di var s = "", dan isi didalam while saja


// For (Loop)
// Lebih ringkas
var o = "";
for (var z = 1; z <= 5; z++) {
    o += "*";
}
console.log(o)

// Var onya harus ditaruh diluar pengulangan for, jika tidak maka tidak akan berfungsi


// Disuruh Mengerjakan
// Buat "*" menjadi 10 baris, setiap barisnya berisi 5 bintang
// Contohnya:
// *****
// *****
// *****
// *****
// *****
// *****
// *****
// *****
// *****
// *****

// Oke aku buat ya
// Menggunakan Loop For dan While secara bersamaan
var b = "";

for( var h = 1; h <= 10; h++ ) {

    // // Menggunakan While
    var p = 1;
    while ( p <= 5 ) {
        b += "*";
    p++
    }

    // Menggunakan For
    for ( var l = 1; l <= 5; l++ ) {
        b += "*"
    }

    b += "\n"
}
console.log(b)




// variabel utama
var k = "";


// Bentuk 1:
        for(var u = 10; u > 0; u--) {
            for(var z = 0; z < u; z++) {
                k += '*';
            }

            k += "\n"
        }

        console.info(k);


// Bentuk 2:
    for(var u = 0; u < 10; u--) {
        for(var z = 0; z <+ u; z++) {
            k += '*';
        }

        k += "\n"
    }

    console.info(k);

// Bentuk 3:
    for ( var u = 0; u < 10; u++ ) {
        for( var spas = 0; spas <= u; spas++ ) {
        k += " ";
        }

        for ( var bntg = 10; bntg >= spas; bntg-- ) {
        k += '*';
        }

        k += '\n';
        }

        console.info(k)

// Bentuk 4:
var y = 15;

for (var i = 0; i < y; i++) {
    for( var x = 0; x <= i; x++ ) {
        k += "*";
    }

    k += "\n"
}

for ( var o = y; o > 0; o-- ) {
    for ( var u = 0; u < o; u++ ) {
        k += "*"
    }

    k += "\n"
}

console.info(k)

// Bentuk 5: (Dari Orang lain) Kagak ngerti gw boyy tetap!
    var n = 5; // jumlah baris
    var result = '';

    // buat baris
    for (var row = 1; row <= n; row++) {

    // cetak spasi
    for (var space = 0; space < n - row; space++) {
        result += ' ';
    }
  
    // buat pola
    for (var star = 0; star < row; star++) {
    
    // jika nilai var star lebih dari atau sama dengan 1 tambahkan simbol tambah (+) setelahnya 
    if (star >= 1) {
        result += '*'
    }
    
    // selain dari itu langsung cetak *
    result += '*';
    }
  
    // print row
    result += '\n';
    }

    console.log(result);


// Bentuk 6: (EZ)
    var s = "";
        var b = 10;

        for(var i = 1; i <= b; i++) {
            if(i % 2 == 0) {
                for(let o = 0; o < (b - 3); o++) {
                    s += "#";
                    s += " ";
                }
            }

            else {
                for(let o = 0; o < (b - 3); o++) {
                    s += " ";
                    s += "#";
                }
            }

            s += "\n";
        }

        console.info(s)