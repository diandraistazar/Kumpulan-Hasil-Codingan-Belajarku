#include <stdio.h>
#include <string.h>

void main() {
	char name[20];
	int age;
	printf("Enter your name: ");
	fgets(name, sizeof(name), stdin);
	name[strlen(name) - 1] = '\0';

	printf("Enter your age: ");
	scanf("%i", &age);

	if(age >= 18) {
		printf("%s, usia %i kamu telah dewasa!.\n", name, age);
	}
	else if(age < 18) {
		printf("%s, usia %i kamu dibawah umur!.\n", name, age);
	}
	else {
		printf("%s, usia \"%i\" ? apa kau bermain-main ?\n", name, age);
	}
}
