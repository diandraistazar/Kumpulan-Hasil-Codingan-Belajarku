#include <stdio.h>

void main() {
	int user_input;
	printf("Cetak angka: ");
	scanf("%i", &user_input);

	for (int i = 1; i <= user_input; i+=1) {
		printf("%i ", i);
		if (i == user_input) {
			printf("\n");
		}
	}
}
