#include <stdio.h>

void main () {
	int user_input;
	printf("Apakah angka mu GENAP atau GANJIL ? ");
	scanf("%i", &user_input);

	if (user_input % 2 == 0) {
		printf("Angka %i adalah GENAP!\n", user_input);
	}
	else if (user_input % 2 > 0) {
		printf("Angka %i adalah GANJIL!\n", user_input);
	}
}
