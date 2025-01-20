let angka = [8,100,5,2,'diandra',1,'mita',91];

// Function Expression
let angkaFilter = angka.filter((e) => typeof(e) === typeof(0));

// Function Decleration
function angkaFilter1(a) {
    let urut = a.filter((e) => typeof(e) === typeof(0))
    return urut.sort((a,b) => a-b)
}

console.info(angkaFilter1(angka));