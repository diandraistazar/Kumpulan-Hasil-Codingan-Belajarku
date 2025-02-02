// Latihan 14: Spread Operator
// Spread Operator ini sama dengan seperti Rest Parameter, mereka menggunakan ... diawal sebelum menamai variabel.

// Kegunaan dari Spread Operator

// 1. Memecah Iterables menjadi single element
// const waifu = ['Mita','Cappie'];
// const mita = [...waifu[0]]

// console.info(mita) // = ["M","i","t","a"]


// 2. Menggambungkan 2 Array
// const angka1 = [1,2,3,4,5];
// const angka2 = [6,7,8,9,10];

// const angka = [...angka1, ...angka2];
// console.info(angka) // = [1,2,3,4,5,6,7,8,9,10];

// Cara lain menggambungkan Array menggunakan .concat() meski tidak se-fleksibel Spread Operator
// const nama1 = ["Diandra","Mita"];
// const nama2 = ["Cappie","Kind Mita"];

// const nama = nama1.concat(nama2);
// console.info(nama)


// 3. Mencopy nilai pada array
// const nama = ["Diandra","Mita"];
// const namaCopy = [...nama]; // menggunakan spread operator mencopy nama, meski namaCopy terdapat perubahan, array nama asli tidak akan ikut berubah
// namaCopy[2] = "Cappie";

// console.info(namaCopy)

// Contoh dari HTML
// const li = document.getElementsByTagName('li');
// const liBaru = [...li].map(e => e.outerText)
// console.info(liBaru)


// Hover setiap huruf nama akan membesar
const nama = document.querySelector('.nama');
const namaPer = [...nama.innerHTML].map(e => `<span>${e}</span>`).join("")
nama.innerHTML = namaPer;