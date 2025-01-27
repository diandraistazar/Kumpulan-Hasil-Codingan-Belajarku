// Latihan 3: Execution Context, Hoisting & Scope

// Didalam JavaScript, terdapat 2 fase dalam Execution Context (Saat program dijalankan) yang membuat JavaScript unik
// 1. Fase Creation
// 2. Fase Execution


// Ketika membuat console.info(nama), ketika dijalankan pasti akan menghasilkan error, karena nama belum di definisikan jadi JavaScript nggak tau apa itu nama, namun ketika kita mendeklerasikan variabel nama SETELAH console.info(nama) hasilnya malah undefined
console.info(nama);
var nama = 'Diandra';

// Ini fase namanya Fase Creation pada Global Context, fase yang bisa disebut hoisting, memindahkan variabel, function, dan lain-lain ke paling atas bagian kode. variabel dipindahkan ke atas dan diisi undefined, function diisi dengan function itu sendiri dan tidak dijalankan
// nama var = undefined
// nama function = fn()
// window = global object
// this = window

// Setelah itu fase creation maka Fase Execution, yakni mengeksekusi kode-nya seperti console.info(nama)

// undefined
// Sandhika
// undefined
// Erik

var nama = 'Diandra';


function satu() {
    var nama = 'Mita';
    console.info(nama)
}

function dua() {
    console.info(nama)
}

console.info(nama);
var nama = 'Diandra';
satu()
dua('Cappie');
console.info(nama);

// undefined
// Mita
// Diandra
// Diandra
