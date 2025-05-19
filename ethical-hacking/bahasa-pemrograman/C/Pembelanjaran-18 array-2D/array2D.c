/*array 2D = array 2D adalah array yang menyimpan element dalam format tabel baris dan kolom. Berbeda dengan array satu dimensi
 * 			yang menyimpan element secara linear dan diakses menggunakan satu indeks. Untuk mengakses element pada array 2D dibutuhkan 2 indeks
 * 			untuk mengakses elementnya.*/
/*sintaks = <tipe data> <nama array>[<rows>][<column>] = {<array>};*/

#include <stdio.h>

int main() {
	double angka[2][3] = {
		/*colums*/
/*rows*/{10.000, 15.000, 20.000}, 
		{1.000, 5.000, 9.000} 
	}; /*aku merapikannya agar lebih mudah memvisualisasikannya. Contoh aku ingin mengakses element kedua dari baris kedua,
		artinya aku harus menggunakan indek baris kedua, kalau dalam bahasa C indek dari 0 jadi indeks baris kedua adalah 1,
		lalu akses element kedua seperti biasa menggunakan indeks yakni 1, karena indek dimulai dari 0. aku harap kamu paham
		apa yang ku maskud.*/

	//printf("%.3lf\n", angka[1][1]); //baris kedua indeks satu, lalu element kedua-nya juga berindeks satu
	
	//menampilkan isi array 2D dengan looping for
	char* nama[3][3] = {
		{"marie", "mita", "cappie"}, //waifu new
		{"yukino", "ryu", "walen apalah"}, //waifu mulai dilupakan
		{"miku", "mizuhara", "shina"} //waifu lama
	};
	int rows = sizeof(nama)/sizeof(nama[0]);
	int columns = sizeof(nama[0])/sizeof(nama[0][0]); /*matematika ku cacat ;)*/

	for(int x = 0; x < rows; x++) { //rows
		for(int x1 = 0; x1 < columns; x1++) { //columns
			printf("%s ", nama[x][x1]);
		}
		printf("\n");
	}
	return 0;
}
