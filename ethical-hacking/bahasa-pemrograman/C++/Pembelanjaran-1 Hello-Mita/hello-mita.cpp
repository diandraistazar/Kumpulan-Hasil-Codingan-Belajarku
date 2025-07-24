#include <iostream>

int main(void) {
	std::cout << "Hello World" << '\n';
	return 0;

	// std = merupakan namespace yang berisi library standar c++
	// namespace sendiri merupakan cara mendeklerasi variabel dengan scope atau wilayah yang terpisah.
	// Dengan namespace, kita dapat mendeklerasikan variabel yang memiliki nama dan tipe yang sama tanpa konflik satu sama lain
	// Hal ini karena namespace seperti membuat wilayah atau scope sendiri untuk dimuat variabel, object, class, func, dan lainnya. 
	// Untuk mengakses data didalam namespace digunakan "::", seperti std::cout, artinya akses object cout yang berada di namespace std
	// simbol "<<" bukan artinya "geser bit ke kiri", melainkan merupakan insertion operator. Operator yang digunakan untuk memasukkan data ke dalam aliran
	// adapun, simbol ">>" artinya ekstraksi operator. Merupakan operator yang digunakan untuk mengambil data dari aliran input biasanya dan simpan di variabel
}
