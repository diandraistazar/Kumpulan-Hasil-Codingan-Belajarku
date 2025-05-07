#include <stdio.h> 

void main () {
	int jam;
	int detik = 3600;
	int konversi;

 	printf("\nMasukkan jam yang ingin di konversi: ");
 	scanf("%d", &jam);
	konversi = (jam * detik);
	printf("Jam			Detik\n%i			%i\n", jam, konversi);
}
