#include <stdio.h>

int main(void) {
	int input;
	fprintf(stdout, "Masukkan angkamu: ");
	scanf("%d", &input);

	fprintf(stdout, "Inputmu adalah: %d\n", input);
	return 0;
}
