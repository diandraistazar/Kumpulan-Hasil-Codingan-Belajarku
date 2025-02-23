// Latihan Object

// Pengelolaan Angkot
// - Sopir
// - Trayek
// - Kas
// - Penumpang
//      - Penumpang Naik
//      - Penumpang Turun


// Pengerjaan (Omaygyatt)
// Function
function naik(nama,angkot) {
    let jumlah = angkot.penumpang;
    let maxCapacity = angkot.maxCapacity;

    if(jumlah.length == 0) {
        angkot.penumpang.push(nama);
        return jumlah
    }
    else {
        for(let i = 0; i < maxCapacity; i++) {
            if(jumlah[i] == undefined) { // ketemu undefined timpa dengan nama baru
                jumlah.splice(i,1,nama)
                return jumlah
            }
            else if(nama == jumlah[i]) { // Ketemu nama yang sama timpa sama
                console.info('Maaf, ' + nama + ' telah berada di angkot ini')
                return jumlah
            }
            else if(jumlah.length < maxCapacity){
                angkot.penumpang.push(nama);
                return jumlah
            }
            else if(i == maxCapacity - 1) { // kursi penuh
                console.info('Angkot ini telah penuh!');
                return jumlah
            }
        }
    }
}


function turun(nama,angkot) {
    let jumlah = angkot.penumpang;
    let maxCapacity = angkot.maxCapacity;

    if(angkot.penumpang == 0) {
        console.info('Tidak dapat menurunkan siapa pun sekarang');
        return jumlah
    }
    else {
        for(let i = 0; i < maxCapacity; i++) {
            if(jumlah[i] == nama) {
                jumlah.splice(i,1,undefined)
                angkot.kas += 4000;
                return jumlah
            }
            else if(i == jumlah.length - 1) {
                console.info('Tidak ada ' + nama + ' di angkot ini')
                return jumlah
            }
        }
    }
}


// Buat Angkot
function Angkot(sopir,dari,ke,maxCapacity) {
    let trayek = [dari,ke];

    this.sopir = sopir,
    this.trayek = trayek.join(" - "),
    this.kas = 0,
    this.penumpang = [],
    this.maxCapacity = maxCapacity
}


// Daftar Data Para Angkot
var angkot1 = new Angkot('Diandra','Muara Teweh','Banjarmasin',2);
var angkot2 = new Angkot('Mita', 'Banjarmasin','Muara Teweh',1)
var angkot3 = new Angkot('Cappie','Jakarta','Jawa',3)
