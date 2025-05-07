#include <stdio.h> 

void hello(char[]); //fungsi prototype

int main() {
	hello("diandra"); //memanggil fungsi meski hanya prototypenya saja
	return 0;
}

void hello(char name[]) { //mendefiniskan secara penuh fungsi hello()
	printf("Hai! %s\n", name);
} 

// output --> "Hai! diandra"
// tetap bekerja semestinya
