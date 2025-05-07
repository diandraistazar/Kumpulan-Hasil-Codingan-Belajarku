#include <stdio.h>

void main() {
	char name[5];
//scanf("%4s", name); // angka 4 pada %4s untuk membatasi char yang masuk, karena aku menulis 4 artinya hanya 4 char yang dpat masuk, itulah mengapa ketika kita lebih menulis 4 kata seperti diandra, yang tampil hanya "dia"
	fgets(name, sizeof(name), stdin); // sintaks fgets(nama variabel, ukuran, sumber)
																		// sizeof(name) artinya ukurannya 5 termasuk \0
	printf("I am %s\n", name);
}
