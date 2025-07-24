// Seperti yang kalian tahu typedef merupakan cara membuat alias dari suatu.
// Di C++, bisa juga typedef untuk data pada namespace

#include <iostream>

// Terdapat dua cara untuk membuat alias dari tipe data menggunakna typedef (cara tradisional dari C) dan using (keyword pada C++)
typedef std::string string_t;
// Disarankan memakai using, karena lebih modern dan fleksibel dan dibuat untuk C++ serta dapat digunakan pada template dibanding typedef yang merupakan keyword tradisonal untuk C
using angka_t = int;

int main(void)
{
	string_t nama = "Diandra";
	angka_t usia = 16;
	std::cout << nama << ", berusia " << usia << " tahun" << '\n';
	return 0;
}
