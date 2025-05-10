/*while-loops = mirip seperti for melakukan pengulangan statement, hanya while dapat melakukanya secara tak terbatas, dan terhenti
 * 				jika kondisi false, kalau di for ditentukan berapa kali pengulangan terjadi, kalau while tak terbatas sampai
 * 				dihentikan oleh kondisi yang false*/
// sintaks while = while(<expression>) {<statement>}
#include <stdio.h> 
#include <string.h>

int main() {
	char nama[20] = "";
	while(strlen(nama) == 0) {
		printf("Masukin namamu: ");
		fgets(nama, sizeof(nama), stdin);
		nama[strlen(nama) - 1] = '\0';
	}
	printf("namamu %s\n", nama);
	return 0;
}
