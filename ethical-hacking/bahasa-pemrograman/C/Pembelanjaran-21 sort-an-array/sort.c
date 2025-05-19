/*Program untuk menurutkan angka array dari terkecil ke terbesar*/
/*Program ini merupakan program sederhana hanya untuk mengurutkan angka dari terkecil ke terbesar secara BERURUTAN, artinya
 * jika angka lompat sekali atau lebih, maka program ini tidak akan berkerja sesuai yang diharapkan. Program ini merupakan hasil latihan saja
 * jadi wajar jika masih banyak kekurangan dalam programnnya!.*/

#include <stdio.h>

void sort_array(int[],int);

int main() {
	//int angka[] = {1,9,10,11,2,8,3,7,4,6,12,13,5};
	int angka[] = {29,28,27,26,25,24,23,22,21,20};
	int size = sizeof(angka)/sizeof(int);
	sort_array(angka, size);
	for(int x = 0; x < size; x++) {
		printf("%s[%d] = %d\n", "angka",x, angka[x]);
	}
	return 0;
}

void sort_array(int array[], int size) {
	int temp[size]; //ukuran penyimpanan sementara
	int index = 0;
	int benar = 0;

	bool condition = true;
	while(condition) {
		if(benar+1 == size) { condition = false; }
		for(int x = 0; x < size; x++) {
			if(array[x] == index) {
				temp[benar] = array[x];
				benar++;
				break;
			}
		}
		index++;
	}

	for(int isi = 0; isi < size; isi++) {
		array[isi] = temp[isi];
	}
}
