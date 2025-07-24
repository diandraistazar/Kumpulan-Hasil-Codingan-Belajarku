// Namespace
// Di awal pembelanjaran, saya dah jelasin apa itu namespace.
// Namespace merupakan cara deklerasi variabel dengan scope yang berbeda atau seperti wilayah sendiri
// Maka dengan namespace, kita dapat deklerasi variabel nama dan tipe yang sama tanpa konflik dengan variabel yang lain.

#include <iostream>

namespace pertama{
	int a = 10;
}

namespace kedua{
	int a = 20;
}

int main(void)
{
	/*
	int a = 10;
	int a = 20;
	*/
	// Jika menulis seperti ini, jelas akan terjadi ERROR bahwa terjadi konflik antar variabel yang memiliki nama dan tipe yang sama
	// Lalu bagaimana, jika ingin tetap membuat variabel dengan label dan tipe yang sama tanpa konflik
	// Disinilah namespace berperan, untuk create namespace cukup dengan namespace <label> {<data>}, seperti di namespace global diatas
	// Sintaks: namespace <label> {
	//		<data>...
	// }
	
	// Kemudian untuk mengaksesnya gunakan "::", seperti pertama::a
	/*
	int a = 30;
	std::cout << pertama::a << '\n';		// variabel a di namespace pertama
	std::cout << kedua::a << '\n';		// variabel a di namespace kedua
	std::cout << a << '\n';					// variabel a di lokal function main
	*/

	// Terdapat keyword "using namespace <label>" yang berfungsi untuk mengakses variabel dalam namespace tersebut tanpa perlu menggunakan operator "::", jadi langsung panggil aja dengan label variabelnya
	/*
	using namespace pertama;		// agar langsung panggil variabel "a" tanpa operator "::"
	std::cout << a << '\n';
	*/
	// cara yang dilakukan diatas untuk semua data yang berada didalam namespace tersebut dapat diakses tanpa operator "::"
	// Nah ada juga "using <label>::<data>" yang berfungsi untuk mengakses variabel tertentu saja dalam namespace, tanpa mempengaruhi semua data dalam namespace tersebut yang dapat menyebabkan konflik
	using pertama::a;
	std::cout << a << '\n';
	return 0;
}
