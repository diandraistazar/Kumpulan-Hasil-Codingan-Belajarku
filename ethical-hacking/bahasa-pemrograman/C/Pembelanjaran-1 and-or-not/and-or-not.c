/*AND (&): operator ini akan menghasilkan true, jika kedua nilai atau lebih menghasilkan kondisi yang benar (true)
 *OR (||): operator ini akan menghasilkan nilai true, jika saja salah satunya menghasilkna kondisi benar (true)
 *NOT (!): berbeda dengan operator sebelumnnya, operator ini berfungsi untuk membalikkan kondisi, jika kondisi yang dihasilkan true,
 				operator ini akan membalikkannya ke false, begitu juga sebaliknya*/

#include <stdio.h>
#include <stdbool.h> //header untuk menggunakan tipe data boolean dan menggunakan keyword 'false' dan 'true' daripada 1 dan 0

// function untuk operator AND
void and_fn() {
	bool rajin = false;
	int nilai = 90;

	if(rajin && nilai > 80) { //akan dijalankan ketika kedua kondisi benar
		printf("Kamu sudah melakukan yang terbaik!");
	}
	else {
		printf("Kamu cukup melakukannya!");
	}
}

void or_fn() {
	bool kepintaran = false;
	bool rajin = true;

	if (kepintaran || rajin) { // jika saja kau rajin atau pintar salah satunya kau termasuk orang langka
		printf("Okelah!");
	}

	else { // benar benar tidak berguna
		printf("Kamu benar-benar tidak berguna!");
	}
}

void not_fn() {
	bool are_you_ok = true;
	// anggap aja kalau false itu sedang tidak baik saja, dan true itu baik-baik saja.
	if (!are_you_ok) { printf("Sepertinya kau baik-baik saja."); }
	else { printf("Apakah kau sedang tidak baik-baik saja?"); }
}

int main() {
	//and_fn();
	//or_fn();
	//not_fn();
	
	if(!1 > 5) { //inilah operator NOT
		printf("Aku cinta mita");
	}

	else {
		printf("Kau tidak mencintai mita!");
	}
	return 0;
}
