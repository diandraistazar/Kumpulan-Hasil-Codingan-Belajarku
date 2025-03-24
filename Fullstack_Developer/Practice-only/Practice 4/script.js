// Practice 3: Template Literlas

// --- EZ
// Soal 1: Dasar Template Literals
// const nama = "Alya";
// const usia = 15;

// console.info(`Nama saya ${nama} dan saya berusia ${usia} tahun`);
// A) Halo, nama saya Alya dan saya berusia 15 tahun.
// B) Halo, nama saya ${name} dan saya berusia ${age} tahun.
// C) Halo, nama saya name dan saya berusia age tahun.
// D) Error

// Jawaban: A


// Soal 2: Multi-Line String dengan Template Literals
// A. 
// const text = "Ini baris pertama
// Ini baris kedua";

// B.
// const text = `Ini baris pertama
// Ini baris kedua`;

// C.
// const text = 'Ini baris pertama\n
// Ini baris kedua'

// D.
// const text = `Ini baris pertama, Ini baris kedua`;
// console.info(text)

// Jawaban: B


// Soal 3: Expression dalam Template Literals
// const x = 5;
// const y = 10;
// console.info(`Hasil penjumlahan ${x} + ${y} adalah ${x + y}`);
// A) Hasil penjumlahan x + y adalah x + y
// B) Hasil penjumlahan 5 + 10 adalah 5 + 10
// C) Hasil penjumlahan 5 + 10 adalah 15
// D) Error

// Jawaban: C


// --- EZ keatas
// Soal 1: Nested Template Literals
// const a = 3, b = 7;
// const mesagge = `${`Hasil: ${a*2} dan ${b - 2}`}`
// console.info(mesagge);
// A) Hasil: 6 dan 5
// B) Hasil: 3 dan 7
// C) Hasil: ${a * 2} dan ${b - 2}
// D) Error

// Jawaban: A


// Soal 2: Template Literals dan Function Calls
// function greet(nama) {
//     return `Hallo ${nama}!`
// }

// console.info(`${greet("Mita")}`);
// A) Halo, Mita!
// B) ${greet("Mita")}
// C) greet("Mita")
// D) Error

// Jawaban: A


// Soal 3: Template Literals dan Tagged Templates
// function tag(strings, ...values) {
//     return strings[0] + values[0] * 2 + strings[1] + values[1] + strings[2];
// }

// const result = tag`Nilai pertama: ${5}, nilai kedua: ${10}.`;
// console.info(result);
// A) Nilai pertama: 5, nilai kedua: 10.
// B) Nilai pertama: 10, nilai kedua: 10.
// C) Nilai pertama: 10 nilai kedua: 10.
// D) Nilai pertama: 10, nilai kedua: .

// strings = ["Nilai pertama: ", ", nilai kedua ", "."]
// values = [5,10]


// Template Literals + Recursion
// Soal 1: Template Literals + Recursion
// function repeatText(text,times) {
//     return times > 1 ? `${text} ${repeatText(text, times-1)}` : text;
// }
// console.info(repeatText("Mita", 3))
// A) Mita Mita Mita
// B) Mita, Mita, Mita
// C) Mita Mita
// D) Error

// Jawaban: A;


// Soal 2: Template Literals + Higher-Order Function
// const transform = (fn, text) => fn`${text}`;

// const result = transform((strings, value) => `${value.toUpperCase()}!`, "Cappie");
// console.info(result)
// A) coding!
// B) CODING!
// C) undefined!
// D) Error

// Jawaban: D
let nama = "Diandra";
let trans = (fn, text) => {
    return fn`${text}`
}

let result = ((sampah,string) => {
    console.info(sampah)
    return string.toUpperCase()
})`${nama}`;

console.info(result)

// Tagged tamplate
// sampah: berisi ["","", "Diandra"]