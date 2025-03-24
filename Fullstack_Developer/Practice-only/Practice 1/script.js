// 1. Angka Genap atau Ganjil
let checkEvenOdd = function(angka) {
    if(angka % 2 == 0) return console.info(`${angka} adalah angka GENAP!`);
    return console.info(`${angka} adalah angka GANJIL!`);
}

// 2. Balik Kata (reverse)
function reverseString(string) {
    return string.split('').reverse().join('');
}
// .split(): memisahkan string menjadi pecahan-pecahan element array berdasarkan pemisah (delimiter) yang ditentukan. Berikut sintaks-nya
//   .string.split(separator, limit)

// separator (opsional): Karakter atau pola yang digunakan untuk memisahkan string. Jika kosong atau tidak diisi, maka string tidak dipecah dan hasilnya berupa array dengan satu elemen, yaitu string itu sendiri. Seperti memisahkan berdasarkan spasi " ", berdasarkan koma ,

// limit (opsional): Angka yang menentukan jumlah maksimum elemen dalam array hasilnya.


// .reverse(): membalikkan posisi element array yang awalnya menjadi pertama menjadi yang terakhir. Jadi element yang awalnya memiliki indexs 0 menjadi indexs terakhir



// .join(): digunakan untuk menggabungkan elemen-elemen array menjadi sebuah string. Berikut sintaksnya
//   array.join(separator)

// separator: Karakter atau string yang digunakan untuk memisahkan elemen-elemen array dalam string hasil. Jika tidak diisi, defaultnya adalah koma ,.



// 3. FizBuzz
let angka = [];
FizBuzz()

function FizBuzz() {
    for(let i = 0; i < 100; i++) {
        angka.push(i+1)
        if(angka[i] % 3 == 0 && angka[i] % 5 == 0) angka[i] = "FizzBuzz"
        if(angka[i] % 3 == 0) angka[i] = "Fizz"
        if(angka[i] % 5 == 0) angka[i] = "Buzz"
    }
return;
}


// 4. Jumlahkan Angka dalam Array
let angka1 = [1,2,3,4,5];

let sumArray = function(angka) {
    let hasil = 0;
    angka.forEach((element) => {
        hasil += element;
    })
    return hasil;
}
sumArray(angka1);


// 5. Bilangan Prima
function isPrime(angka) {
    for(let i = 2; i < angka; i++) { if(angka % i == 0) return false; }
return true;
}


// 6. Piramida Bintang // susah banget
function piramida(jumlah) {
    for(let i = 0; i < jumlah; i++) {
        let spasi = " ".repeat(jumlah - i+1);
        let bintang = "*".repeat(2 * (i+1) - 1);
        
        console.info(spasi + bintang)
    }
}