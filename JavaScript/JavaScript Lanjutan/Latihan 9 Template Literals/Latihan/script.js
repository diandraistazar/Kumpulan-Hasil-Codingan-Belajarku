// Latihan 9: Template Literal

// 1. HTML Fragments
// const mita = {
//     name: "Mita",
//     age: 15,
//     personality: "Yandere",
//     tools: ["Knife","Baseball"]
// }

// let elementMita = 
// `<div class="mita">
//     <h1 class="name">${mita.name}</h1>
//     <h4 class="age">Usia ${mita.age}</h4>
//     <p class="about" mita>Personality dari ${mita.name} adalah ${mita.personality}, dan alat pembunuh yang disukainya ${mita.tools.join(", ")}</p>
// </div>
// `
// document.body.innerHTML = elementMita


// 2. Looping
// const siswa = [
//     {
//         nama: "Diandra",
//         email: "diandrajelekbener@gmail.com",
//         usia: 15,
//         hobi: "unknown"
//     },
//     {
//         nama: "Mita",
//         email: "mita12@gmail.com",
//         usia: 15,
//         hobi: "Cartrige"
//     },
//     {
//         nama: "Cappie",
//         email: "cappiecool@gmail.com",
//         usia: 15,
//         hobi: "musik"
//     },
// ]

// let element =
// `<div class="identitas">
//     ${siswa.map(m => `<ul>
//         <li>Nama: ${m.nama}</li>
//         <li>Email: ${m.email}</li>
//         <li>Usia: ${m.usia}</li>
//         <li>Hobi: ${m.hobi}</li>
//     </ul>`).join("")}
// </div>
// `

// document.body.innerHTML = element;


// 3. Conditional
// const lagu = {
//     judul: "Shelter",
//     penyanyi: "Porter Robinson",
//     feat: "Diandra"
// }

// let element = 
// `<div class="song">
//     <ul>
//         <li>Judul: ${lagu.judul}</li>
//         <li>Penyanyi: ${lagu.penyanyi}</li>
//         ${lagu.feat ? `<li>Feat: ${lagu.feat}</li>` : ``}
//     </ul)
// </div>
// `

// document.body.innerHTML = element


// 4. Bersarang
const siswa = {
    nama: "Diandra",
    kelas: 10,
    mataPelajaranF: [
        "Bahasa Inggris",
        "Informatika",
        "Anime",
        "Bahasa Jepang"
    ]
};

let element = 
`<div class="siswa">
        <h1>Nama: ${siswa.nama}</h1>
        <span>Kelas: ${siswa.kelas}</span>
        <h3>Mata Pelajaran</h3>
        ${cetakMataPelajaran(siswa.mataPelajaranF)}
</div>
`

function cetakMataPelajaran(n) {
    let that = n;

    return `<ol>
        ${that.map(mp => `<li>${mp}</li>`).join("")}
    </ol>`
}

document.body.innerHTML = element