/*For-loops = For digunakan untuk mengeksekusi statement secara berulang-ulang sesuai kondisi yang ditetapkan
 * 			  Contoh: perulangan akan berakhir ketika mencapai ke-20*/

/*Sintaks For = for(<index>;<kondisi>;<increment/decrement>) {<statement>}*/
#include <stdio.h>

void say(char kata[]) {
	printf("%s\n", kata);
}

int main() {
	for(int x = 1; x <= 100; x++) { /*untuk index menggunakan integer atau decimal yang berupa tipe data number
									  untuk kondisi biasanya menggunakan operator perbandingan < > <= >= !=
									  untuk increment/decrement menambahkan angka ke index, bisa menggunaka x++ x-- x+=1 x-=1
									  untuk statement terserah apa saja*/
		printf("%d ", x);
		say("aku suka marie!");
	}
	return 0;
}
