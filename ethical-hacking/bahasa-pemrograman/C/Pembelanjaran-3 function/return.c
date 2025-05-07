/*Return dalam function digunakan untuk mengembalikan nilai dari code yang memanggilnya*/
#include <stdio.h>

int perkalian(int pertama, int kedua) {
	int hasil = pertama * kedua; //sesuai tipe data function, fungsi akan mengembalikan hasil perkalian
	return hasil;
}

int main() {
	int hasil = perkalian(60,4); //memanggil fungsi dan mengirim 2 argumen untuk dikalikkan
	printf("Hasil: %d\n", hasil); //mencetak hasilnya
	return 0;
}
