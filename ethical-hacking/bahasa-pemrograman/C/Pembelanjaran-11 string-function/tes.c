#include <stdio.h>
#include <string.h>

int main() {
	char nama[8] = "diandra";
	char tambahan[] = "ganteng";
	strcat(nama, tambahan);
	printf("%s dan %s\n", nama, tambahan);
	//printf("%p\n", nama);
	//printf("%p\n", tambahan);
	return 0;
}
