#include <stdio.h>

int main() {
	// const sesuai namanya tetap/konstan berfungsi untuk membuat suatu variabel itu tidak dapat diubah nilainya. contoh terdapat variabel x yang diinsilisasi angka 7, lalu kemudian aku mengubah nilainya. maka yang terjadi muncul error

	const int x = 7;
	printf("angkanya adalah %i\n", x); // output "angkanya adalah 7"
	
	x = 10; // lalu aku mencoba mengisi nilai baru pada variabel x tersebut
	printf("angkanya adalah %i", x); // error
																	 /*
																		 Ini bisanya berguna untuk settingan yang tidak dapat oleh
																		 diubah oleh user.*/
	return 0;	
}
