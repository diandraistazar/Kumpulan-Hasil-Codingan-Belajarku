/*Array = Array merupakan tipe data yang dapat menampung banyak nilai dengan tipe data yang sama. Dalam struktur data array
 * 		  merupakan struktur yang dapat menyimpan nilai dengan tipe data yang sama dan disimpan secara berurutan di memori komputer.
 * 		  untuk mengakses nilai dalam array harus menggunakan indeks.*/
/*Sintaks = <tipe data> <nama array>[] = { <values> };*/

#include <stdio.h>

int main() {
	double harga[] = { 5.000, 10.000, 15.000, 18.000 }; /*dalam kurung kurawal, nilai disimpan dan dipisahkan dengan koma
														untuk menandai akhir value.*/
	printf("Susu - Rp. %.3lf\n\n", harga[0]); /*untuk mengakses isi array menggunakan indeks, indeks tergantung dari bahasa pemrogramman
										  jika bahasa C, indeks dimulai dari angka 0 untuk mengakses nilai pertama dari array. 
										  Karena aku ingin mengakses angka desimal '5.000' dan karena posisinya berada di posisi pertama
										  , maka aku menggunakan indeks 0 untuk mengaksesnya.*/

	/*dalam membuat array kita juga dapat menentukan berapa value yang dapat dimuat dengan menambahkan angka dalam kurung siku
	 * saat mendefiniskan array*/
	int angka[5] = {1, 2, 3, 4, 5}; /*menggunakan angka 5 untuk menentukan array hanya dapat menampung 5 value
									apa yang terjadi jika ditentukan 5, tetapi maksa nambah satu sehingga melebihi kapasitas?
									hasilnya muncul warning: excess elements in array initializer, yang artinya array tidak dapat menampung
									element baru yang melebihi kapasitas.*/

	/*Sekarang aku akan mengakses semua element pada array menggunakan metode looping (for)*/
	double hargabaru[4] = { 7.000, 11.000, 20.000, 25.000 };
	char* nama[4] = { "Susu", "Yogurt", "Ayam geprek", "Ayam bakar" }; /*Menggunakan * yang artinya tipe data pointer pada array string literals
																		karena string literal merupakan array kumpulan karakter, yang artinya sekarang
																		kita sedang menyimpan sebuah array, dengan * (pointer) artinya kita menyimpan
																		alamat memori dari array-array tersebut karena kalian tahu sendiri array itu 
																		jika dipanggil langsung merupakan alamat memori.*/
	printf("======MENU======\n");
	for(int x = 0; x < 4; x++) {
		printf("%s - Rp. %.3lf\n", nama[x], hargabaru[x]); /*x merupakan indeks dari looping for, kita manfaatkan itu
															itu untuk membaca isi array.*/
	}
	return 0;
}
