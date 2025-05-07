// operator ternary merupakan operator yang menerima 3 value (operan), dan akan mengembalikan nilai berdasarkan hasilnya
// mirip seperti if-else, hanya saja dalam bentuk yang lebih singkat.
// sintaks: <kondisi> ? <value ketika true> : <value ketika false>

#include <stdio.h>

int lebihbesar(int satu, int dua) {
	if(satu > dua) {
		return satu;
	}
	else {
		return dua;
	}
}

int main() {
	int angka = (1 > 5) ? 5 : 1; // ketika kondisinya salah, maka yang di ambil value 0, sebaliknya jika benar maka yang diambil value 5
	printf("Hasilnya: %d\n", angka);

	//printf("Lebih besar angka %d\n", lebihbesar(50,40));
	return 0;
}
