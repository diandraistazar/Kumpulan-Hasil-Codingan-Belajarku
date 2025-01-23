// Latihan 2: DOM Selection
// Konsep DOM untuk memilih element HTML menggunakan JavaScript

// DOM Selection adalah tahap awal menelusuri atau memanipulasi element HTML, jadi sebelum ingin merubah atau mengganti element HTML terlebih dahulu melakukan DOM Selection

// Di DOM terdapat istilah nodeList dan HTMLCollection:
// Kedua istilah tersebut merupakan kumpulan node atau simpul di DOM, hanya saja ada sedikit perbedaaan
// nodeList: merupakan kelompok node yang lebih dari satu, dan node-nya memiliki tipe yang berbeda-beda, jadi meskipun satu kelompok node-nya memiliki tipe yang berbeda-beda, ada yang element, teks, comment dan sebagainya

// HTMLCollection: sama seperti nodeList hanya saja kelompok node-nya hanya kumpulan element HTML, tidak dapat campur dengan tipe node lain hanya element HTML

// Untuk memilih Element HTML menggunakan JavaScript, kita bisa menggunakan:
// - getElemenyById() = 'hello', 'judul'
    // Memilih element HTML dengan mencari element yang memiliki Id yang dimaksud, di html terdapat atribut untuk Id itu yaitu id="", jadi atribut itu sebagai Id yang nantinya kita panggil di JavaScript. Fungsi ini mengembalikan sebuah element. 

// - getElementsByTagName() = p
    // Memilih element HTML dengan Tag tertentu, di fungsi ini pasti-nya element yang kita cari akan lebih dari satu, karena fungsi ini mencari tag HTML, contoh mencari Tag h1, jika didalam HTML tersebut h1-nya lebih dari satu, maka semuanya akan dipilih. Fungsi ini akan mengembalikan dalam bentuk Array HTMLCollection [p,p]
    
// - getElementsByClassName() = 'link'
    //  Memilih Element HTML berdasarkan class-nya, misalnya class yang dicari container yang di dalamnya berisi banyak element lagi, maka yang dipilih adalah tetap container yang memuat banyak element HTML. Fungsi ini akan mengembalikan dalam bentuk Array HTMLCollection
     
// - querySelector()
    //  Ini mirip dengan selector CSS, jadi kamu cukup menulis kan (#judul,.container, img, dll) untuk memilih element yang dicari. querySelector hanya akan mengembalikan satu element yang ditemui-nya dalam bentuk element, jika tidak ditemukan akan mengembalikan null. 

    // Contoh Selector CSS-nya seperti #id, div.class, img. Mirip seperti kita menggunakan CSS untuk memilih element
     
// - querySelectorAll() 
    //   Sama seperi querySelector, hanya beda-nya querySelectorAll mengembalikan semua element yang ditemui-nya dalam bentuk NodeList struktur data Array.
    
    
// Agar lebih jelas, maka kita akan coba praktek
// - document.getElementById()
const judul = document.getElementById('judul');
judul.style.color = "rgb(5, 230, 24)"; // Merubah warna id judul
judul.style.fontSize = '1.9rem'; // Merubah ukuran teks
judul.style.backgroundColor = 'black'; // warna background hitam
judul.innerHTML = 'Mita Kawaii'; // Mengubah isi dari tag nya menjadi Mita

// style nya akan diberikan secara inline style, langsung dari atributnya
// Kita nanti akan mengaturnya agar tidak jani inline style


// - document.getElementsByTagName()
const p = document.getElementsByTagName('p');
for(let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'grey';
    p[i].style.fontFamily = 'arial';
}

const h6 = document.getElementsByTagName('h6')[0];


// - document.getElementByClassName()
const isi = document.getElementsByClassName('isi')[0]
isi.style.backgroundColor = 'white';


// - querySelector()
const pSectionB = document.querySelector('#b p')
pSectionB.style.color = 'green';

const liSectionB = document.querySelector('#b ul li:nth-child(2)');
liSectionB.style.backgroundColor = 'orange';
liSectionB.innerHTML = 'Mita is the best Girl';


// - querySelectorAll()
const p1 = document.querySelectorAll('p');
for(let i = 0; i < p1.length; i++) {
    p1[i].innerHTML = 'Mita and Cappie are cute'
}


// Itulah penggunaan dari method dari DOM Selection


// Sebelum penjelasan selesai, ada satu topik yang ingin aku bahas yaitu
// - mengubah Node Root

// Sebelumnya kita selalu menggunakan document sebagai node rootnya
const nodeRoot = document.getElementById('a')

// Kita dapat mengubah node root-nya, dengan cara mempersempit. Begini caranya
const sectionB = document.getElementById('b'); // Pertama, kita ambil dulu yang kita ingin jadikan node root, sebagai contoh section ber-id b
const pB = sectionB.querySelector('p'); // Nah aku mengganti node root documnet menjadi variabel yang berisi section b itu, sekarang node root nya adalah element section ber-id b

// gimana mengerti gk, sebelumnya kita harus menggunakan spesifik selectornya, dengan mengganti node root-nya, kita tidak perlu lagi terlalu spesifik, contoh seperti yang kulakukan aku hanya tinggal memanggil element-nya dengan 'p' yang berada didalam section-b tanpa harus menuliskan didalam-nya secara spesifik

// Atau aku akan membalikkannya
const sectionB1 = document.querySelector('section#b');
const pB1 = sectionB1.getElementsByTagName('p')[0];
pB1.style.color = 'purple'