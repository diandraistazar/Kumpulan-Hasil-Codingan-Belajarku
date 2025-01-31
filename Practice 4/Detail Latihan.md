Detail Practice 4: Template Literals

- Ilmu yang baru didapatkan
1. Ternyata dapat menggunakan Arrow Function di Tagged Template tanpa harus memanggil-nya lewat Function Expression
Contoh: (Menggunakan IIDE untuk mengesekusi kode-nya langsung)
let nama = "diandra";
let result = ((sampah, string) => string.toUpperCase()`${nama}`)();
console.info(result) // output = DIANDRA

2. Ketika Tagged Template dibagian `${nama}` akan dipecah menjadi (["",""], "Diandra"), aku nddak tau kenapa ya itu yang dilakukan JavaScript.


- Detail Latihan:
1. Sesi Pertama --EZ
    Soal 1: Dasar Template Literals
    Soal 2: Multi-Line String dengan Template Literals
    Soal 3: Expression dalam Template Literals

2. Sesi Kedua --EZ keatas
    Soal 1: Nested Template Literals
    Soal 2: Template Literals dan Function Calls
    Soal 3: Template Literals dan Tagged Templates

3. Sesi Ketiga --Lumayan
    Soal 1: Template Literals + Recursion
    Soal 2: Template Literals + Higher-Order Function