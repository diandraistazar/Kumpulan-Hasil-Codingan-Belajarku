var penumpang = [];

function tambah(nama,angkot) {
    if(angkot.length === 0) {
        angkot.push(nama);
        return angkot;
    }

    else {
        for(let i = 0; i < angkot.length; i++) {
            if(angkot[i] == nama) {
                console.info('Maaf, ' + nama + ' telah berada di dalam Angkot')
                return angkot;
            }

            else if(angkot[i] == undefined) {
                angkot.splice(i,1,nama);
                return angkot;
            }

            else if(i == angkot.length - 1) {
                angkot.push(nama);
                return angkot;
            }
        }
    }
}

function hapus(nama,angkot) {
    if(angkot.length == 0) {
        return console.info('Angkot saat ini sedang kosong. Tidak dapat menurunkan siapa pun')
    }
    else{
        for(let i = 0; i < angkot.length; i++) {
            if(angkot[i] == nama) {
                angkot.splice(i,1,undefined);
                return angkot
            }
            else if(i == (angkot.length-1)) {
                console.info('tidak dapat menemukan ' + nama)
                return angkot
            }
            
        }
    }
}


// Jika angkot kosong
    // tambah penumpang di awal array
    // kembalikan isi array & keluar dari function
// else
  // telusuri kursi dari awal
    // jika ada kursi kosong
        // tambah penumpang di kursi tersebut
        // kembalikan isi array & keluar dari function
    // jika sudah ada nama yang sama
        // tampilkan pesan kesalahannya
        // kembalikan isi array & keluar dari function
    // jika seluruh kursi terisi
        // tambah penumpang di akhir array
        // kembalikan isi array & keluar dari function