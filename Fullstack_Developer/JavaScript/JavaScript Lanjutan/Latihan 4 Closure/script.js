// Latihan 4: Closure

// Closure adalah kemampuan function mengingat variabel di luar fungsi itu (di lingkup tempat fungsi itu dibuat) walaupun fungsi itu sudah selesai di panggil

function tambahAngka(angka1) {
    // let angka1 = 5;
    return function(angka2) { 
        return angka1 + angka2 
    }
}

const angka = tambahAngka(5);
console.info(angka(2)); // 7
console.info(angka(4)); // 9

// Sekarang, didalam variabel angka itu, bukan lagi function tambahAngka meski di source code-nya tulisannya masih tambahAngka(5), tetapi ketika kamu membuka variabel angka di console yang muncul adalah

// function(angka2) {
//     return angka1 + angka2
// }

// angka2 oke kita tadi udah ngasih argument-nya 2 dan 4, tetapi bagaimana dengan angka1? ya karena sebelumnya dia berada didalam function yang berisi variabel angka1 tersebut, function yang dikembalikan ini masih mengingat variabel angka1 tersebut, itulah mengapa kita memperoleh hasil 7 dan 9.


// Dari Youtube
// Closure merupakan kombinasi antara function dan lingkungan leksikal (lexical scope) di dalam function tersebut.

// Closure adalah sebuah function yang memiliki akses ke parent scope-nya, meskipun parent scope-nya sudah selesai di eksekusi

// Closure adalah sebuah function dikembalikan oleh function yang lain, yang memiliki akses ke lingkungan saat ia diciptakan

// Closure adalah sebuah function yang sebelumnnya sudah memiliki data hasil dari function yang lain

// A. Lexical Scope
// Lexical Scope (atau static scope) adalah aturan tentang bagaimana variabel ditentukan lingkupnya berdasarkan di mana variabel itu dideklarasikan dalam kode.

function init() {
    let nama = 'Mita';
    function panggilNama() { // inner function (*closure)
        console.info(nama) // mengakses ke parent variabel nama
    }
    panggilNama()
}
init()

// Coba deh kalau gini
function nama() {
    return function(nama) {
        console.info(`Nama saya adalah ${nama}`)
    }
}

const perkenalan = nama();
perkenalan('diandra');


// Kenapa menggunakan Closure?
// - Untuk membuat Function Factories
// - Membuat private method


// Function Factories
function selamat(waktu) {
    return function(nama) {
        console.info(`Hallo ${nama}, selamat ${waktu}`);
    }
}

const pagi = selamat('Pagi');
const siang = selamat('Siang');
const malam = selamat('Malam');

pagi('Diandra');;
siang('Mita');
malam('Cappie');


// Private Method
function add() {
    let counter = 0;
    return function() {
        return ++counter
    }
}

let a = add();
// Isinya let a sekarang
// function() {
//     return ++counter
// }
console(a())


// ++counter (prefix) tambahkan 1 ke variabel counter terlebih dahulu setelah itu melakukan operasi lain seperti return
// counter++ (postfix) return terlebih dahulu variabel counter-nya setelah itu di tambahkan 1