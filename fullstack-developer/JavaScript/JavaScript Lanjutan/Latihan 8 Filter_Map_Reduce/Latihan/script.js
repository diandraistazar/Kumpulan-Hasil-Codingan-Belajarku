// Latihan 8: Filter, Map, Reduce

// data-nama: merupakan atribut yang dapat dikostum bagain nama
// diakses di javascript menggunakan .dataset.nama


const videos = Array.from(document.querySelectorAll('[data-duration]')); // Nodelist to Array
const totald = document.querySelector('.total-durasi');
const jumlahv = document.querySelector('.jumlah-video')

doIt(videos);


function doIt(videos) {
    let playlist = videos.filter((a) => {
        return a.innerHTML.includes('JAVASCRIPT LANJUTAN')
    })

    let durationPlaylist = duration(playlist);

    let hour = Math.floor(durationPlaylist / 3600);
    let minute = Math.floor((durationPlaylist % 3600) / 60);
    let second = Math.floor((durationPlaylist % 3600) % 60);

    jumlahv.innerHTML = `${playlist.length} video`;
    totald.innerHTML = `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`
return;
};


function duration(playlist) {
    let minutes = playlist.map((a) => {
        return parseInt(a.dataset.duration) * 60;
    })
    
    let seconds = playlist.map((a) => {
        let string = a.dataset.duration;
        return parseInt(string.slice(3,5));
    })

    let a = minutes.reduce((a,b) => {
        return a + b
    }, 0)
    let b = seconds.reduce((a,b) => {
        return a + b
    }, 0)

    return a + b;
}



// Algoritma
// ambil semua element video

// pilih hanya di JavaScript Lanjutan

// ambil durasi masing-masing video

// ubah durasi menjadi integer , lalu diubah menit menjadi detik

// Jumlahkan semua durasi

// ubah formatnya menjadi jam, menit, detik

// simpan di DOM 