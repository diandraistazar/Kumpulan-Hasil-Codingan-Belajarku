const container = document.querySelector('.container');
const data = Array.from(document.querySelectorAll('.data'));

let siswa = [
    {
        profile: "img-profile/diandra.png",
        nama: "Diandra",
        usia: 15,
        mataPelajaranF: "Informatika"
    },
    {
        profile: "img-profile/mita.jpg",
        nama: "Mita",
        usia: 15,
        mataPelajaranF: "Cartride"
    },
    {
        profile: "img-profile/cappie.jpg",
        nama: "Cappie",
        usia: 15,
        mataPelajaranF: "Music"
    }
];

cetakSiswa(siswa)

function cetakSiswa(n) {
    let that = n;

    for(let i = 0; i < that.length; i++) {
        let e = that[i];

        let hasil = 
        `<div class="data ${e.nama.toLowerCase()}">
            <img src="${e.profile.length == 0 ? `img-profile/user.png` : `${e.profile}`}" alt="${e.nama.toLowerCase()}-profile" class="profile">
            <div class="info">
                <span class="nama">Nama: <span class="sp">${e.nama}</span></span>
                
            </div>
        </div>
        `

        container.innerHTML += hasil;
    }
}

container.addEventListener('mouseover', function(e) {
    let url = e.target.getAttribute('src')

    console.info(e.target)

    document.body.style.backgroundImage = `url(${url})`;
    document.body.style.backgroundPosition = "0 -200px";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
})