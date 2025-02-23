// Contoh Pemesananan makanan / minuman:
var condition = true;
var slMenu = "";

while ( condition ) {
var menu = prompt("Mau pesan apa?: \n \n lm --> (List Menu)");
var listMenu = ["\nNasi Goreng", "Mie Goreng", "Nasi Kuning", "Telur Ceplok", "Free Fire", "Mita", "Cappie"];


    if ( menu == "lm" ) {
        var condition2 = true;
        while ( condition2 ) {
            slMenu = prompt("List Menu: " + listMenu)

        if ( ((slMenu == "malas" || slMenu == "Malas")) ) {
            alert("Kalau malas ngapain pesan boss!");
        while (true) {
            alert("malas teruss!");
        }
        }

        else if (listMenu.includes(slMenu)) {
            condition2 = false;
            condition = false;
        }

        else if (slMenu == "I Love You") {
            alert("Ahh, I love you too :3")
        }

        else {
            alert("Masukkan Makanan yang tersedia!");
            condition2 = true;
        }
        }
    }
    else if (listMenu.includes(menu)) {
        condition = false;
    }

    else if ((menu == "malas" || menu == "Malas") || (slMenu == "malas" || slMenu == "Malas")) {
        alert("Kalau malas ngapain pesan boss!");
        while (true) {
            alert("malas teruss!");
        }
    }

    else if ( menu == "I Love You" ) {
        alert("Ahh, I Love You To :3")
    }

    else {
        alert("Tolong Masukkan Makanan yang ada!");
    }
}

// List Menu
var condition3 = true
while ( condition3 ) {
    if (listMenu.includes(menu) ) {
        alert("Kamu Memilih " + menu + "!")

        condition3 = false
    }

    else if ( listMenu.includes(slMenu)) {
        alert("Kamu Memilih " + slMenu + "!")

        condition3 = false
    }

    else {
        alert("ERORRRRR")

        condition3 = true
    }
}


// .trim(): berfungsi untuk menghapus spasi tambahan di akhir atau diawal string karena kesalahan pengguna, pengguna sering kali kelebihan spasi, sehingga membuat string menjadi tidak enak diliat, .trim() disini berfungsi memperbaiki string yang kelebihan spasi :3

// .include(): gimana ya bilangnya. Contoh listMenu.include(menu), jadi maksudnya include, jika di listMenu terdapat string "Hai" , lalu function include mengecek hal yang sama kepada menu, jika hasilnya sama listMenu dan menu maka akan menjadi true, tapi jika listMenu tidak sama dengan didalam menu, maka hasilnya false. 
// Simplenya, listMenu.include(menu), program tolong cek apakah didalam variabel ListMenu sama dengan yang terkandung didalam variabel menu, jika iya maka nilainya true, sebaliknya jika tidak sama listMenu dan menu, maka false.