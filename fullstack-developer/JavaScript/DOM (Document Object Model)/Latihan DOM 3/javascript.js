// Latihan 3: DOM Manipulation

// Sebelumnnya, kita udah belajar cara memilih element HTML menggunakan DOM
// Sekarang, kita akan belajar bagaimana memanipulasi Element HTML-nya

// Sebenarnya kita udah mencoba beberapa untuk memanpulasi element HTML seperti element.style.<property> , element.innerHTML , dan sebagainya. Dan semua itu termasuk kedalam DOM Manipulation

// Dalam DOM Manipulation, kita akan mempelajari Manipulasi Element dan Manipulasi Node
// Manipulasi Element: artinya kita merubah dan mengganti element dari html-nya saja dan tidak diganti, seperti menambahkan style, atribut, dan lain-lain
// Manipulasi Node: artinya kita memanipulasi atau mengganti dan merubah elemet HTML, berbeda Manipulasi Element yang tidak dapat menyisipkan element HTML baru, dengan memanipulasi Node, nantinya kita dapat membuat Element HTML baru atau merubah dan mengganti menggunakan metode Manipulasi Node ini.


// A. Manipulasi Element
// Terdapat beberapa method yang digunakan untuk memanipulasi element HTML
// - element.style.<property> = untuk menggunakan properti CSS
// - element.innerHTML = mengubah isi element
// - element.setAttribute() = menambahkan atribut
// - element.removeAttribute() = menghilangkan artibut
// - element.getAttribute() = mendapatkan atri
// - element.classList = memanipulasi class
// ...

// Beberapa tidak akan aku jelaskan, karena method-nya juga gampang bahkan udah kita pelajari sebelumnya

// - setAttribut('atribut','value') = berfungsi untuk menambahkan attribut
const h1 = document.getElementsByTagName('h1')[0];
h1.setAttribute('id','judul') // Sekarang tag h1 sudah memiliki id dengan value judul

// - removeAttribut(atribut) = berfungsi untuk menghapus atribut
// h1.removeAttribute('id');

// - getAttribut('atribut) = berfungsi untuk mendapatkan value atribut
h1.getAttribute('id')


// - classList = memanipulasi class
// Beberapa cara untuk memanipulasi class
// - element.classList.add() = untkk menambahkan class baru
// - element.classList.remove() = untuk menghilangkan class yang ada
// - element.classList.toggle() = jika suatu element tidak memiliki class, maka toggle akan menambahkan class, tapi jika ada toggle akan menghapus class tersebut 
// - element.classList.item() = untuk mengetahui class tertentu didalam element, jika didalam element terdapat 3 class, maka aku akan memilih 2
// - element.classList.contains() = untuk mengecek apakah dalam suatu element terdapat class tertentu
// - element.classList.replace() = menimpa class yang dengan yang baru

const link = document.getElementsByClassName('link')[0]


// B. Manipulasi Node
// Manipulasi Node memungkin kan kita untuk menambahkan element baru, menghapus dan mengubah element pada HTML

// Terdapat beberapa method untu memanipulasi node
// - document.createElement()
// - document.createTextNode()
// - node.appendChild()
// - node.insertBefore()
// - parentNode.removeChild()
// - parentNode.replaceChild()
// ...


// Menambahkan element HTML
// --> .createElement('h1'), .createTextNode('Hello Mita!'), .appendChild('h1')
const h1 = document.createElement('h1');
const h1ISI = document.createTextNode('Hello Mita!');
h1.style.fontFamily = 'arial'

h1.appendChild(h1ISI);

const body = document.getElementsByTagName('body')[0];
body.appendChild(h1);


// Menambahkan element HTML
// --> .insertBefore
// Menambahkan list baru setelah 1
const newList = document.createElement('li');
const newListIn = document.createTextNode('Lihanna');

newList.appendChild(newListIn);

const ul = document.getElementsByClassName('list-waifu')[0];
const liNd2 = ul.getElementsByTagName('li')[1];

ul.insertBefore(newList,liNd2) // membutuhkan 2 argument, (newElement, element sebelum dari newElement)




// Semua itu manipulasi node menggunakan method yang lama, sekarang terdapat yang baru
// - parentNode.append() = menambahkan element sebagai child (diakhir)
// - parentNode.prepend() = menambahkan element sebagai child (diawal)
// - childNode.before() = menambahkan element sebelum child
// - childNode.after() = menambahkan element sesudah child
// - childNode.remove() = menghapus element
// - childNode.replaceWith() = menimpa element
// ...