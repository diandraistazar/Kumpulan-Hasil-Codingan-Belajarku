#include <stdio.h>

void main() {
	char input;
	printf("\nApakah huruf mu konsonan atau vokal ? ");
	scanf("%c", &input);

	switch(input) {
		case 'a': case 'i': case 'u': case 'e': case 'o':
		case 'A': case 'I': case 'U': case 'E': case 'O':
			printf("Huruf %c adalah huruf VOKAL!\n", input);
			break;

		default:
			printf("Huruf %c adalah huruf KONSONAN!\n", input);
	}
}
