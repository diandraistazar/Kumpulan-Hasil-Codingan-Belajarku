#include <stdio.h>

void main() {
	int x = 1;
	int y = 0;
	printf("Sebelum: x = %i dan y = %i\n", x, y);

	int *ptr1 = &x;
	int *ptr2 = &y;

	int temp = *ptr1;
	*ptr1 = *ptr2, *ptr2 = temp;
	printf("Setelah: x = %i dan y = %i\n", x, y);
}
