// ada beberapa fungsi dalam std:: yang berguna untuk operasi aritmatika
#include <iostream>
#include <cmath>		// wajib setarkan cmath header untuk menggunakan fungsi aritmatika ini

int main(void)
{
	// Variabels
	int x = 5;
	int y = 2;
	int z;
	
	// Berfungsi mencari angka terbesar antara 2 value
	// Sintaks: std::max(value1, value2, comp)
	z = std::max(x, y);
	
	// Berfungsi mencari angka terkecil antara 2 value
	// Sintaks: std::max(value1, value2, comp)
	z = std::min(x, y);
	
	// Berfungsi menghitung perpangkatan. Diberikan 2 value, maka jadinya value1^value2
	// Sintaks: std::pow(value1, value2) -- (floating-point)
	z = std::pow(x, y);
	
	// Berfungsi menghitung akar kuadrat dari bilangan. Mencari angka yang jika dikalikan dengan dirinya sendiri menghasilkna angka yang diberikan
	// Sintaks: std::sqrt(value1)
	z = std::sqrt(y);
	
	// Berfungsi mengubah nilai jadi absolut. Artinya mau nilainya negatif/positif, fungsi ini akan selalu menghasilkan angka tersebut dalam positif
	// Sintaks: std::abs(value1)
	z = std::abs(x);
	
	// Berfungsi untuk membulatkan bilangan terdekat. Diatas .5 akan dibulatkan ke atasnya, sementara dibawah .5 akan dibulatkan kebawahnya
	// Sintaks: std::round(value1);
	z = std::round(y);
	
	// Berfungsi membulatkan angka ke atas, kecuali angka tersebut telah bulat maka akan dibulatkan dengan angka itu juga
	// Sintaks: std::ceil(value1);
	z = std::ceil(x);
	return 0;
}
