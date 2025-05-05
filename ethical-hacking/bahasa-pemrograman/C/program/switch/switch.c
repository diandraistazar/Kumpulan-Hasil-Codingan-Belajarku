#include <stdio.h>

void main(){
	/*Switch	- Mirip seperti if-else hanya saja lebih fleksibel dan efisien.
	 * 					Penggunanya cukup sederhana hanya membandingkan satu atau lebih tipe data.
	 * 					Tetapi sayangnya, switch tidak dapat membandingkan string, switch hanya membandingkan tipe data
	 * 					integer, char, dan lain-lain berupa nilai individual.
	 * 					*/

	char *hari[7] = { "senin", "selasa", "rabu", "kamis", "jum'at", "sabtu", "minggu" };
	int input;

	printf("\nMasukkan hari apa (only number) ? ");
	scanf("%i", &input);

	switch(input) {
		case 1:
			printf("Hari Senin\n");
			break;

		case 2:
			printf("Hari Selasa\n");
			break;

		case 3:
			printf("Hari Rabu\n");
			break;

		case 4:
			printf("Hari Kamis\n");
			break;

		case 5:
			printf("Hari Jum'at\n");
			break;

		case 6:
			printf("Hari Sabtu\n");
			break;

		case 7:
			printf("Hari Minggu\n");
			break;

		default:
			printf("Tolong masukkan hanya angka 1 - 7");
	}
}
