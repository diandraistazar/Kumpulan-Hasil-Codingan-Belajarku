/*Function dapat menerima sebuah argument, argumen adalah nilai yang dikirimkan ke function tersebut*/
#include <stdio.h>

void perkenalan(char a[], int b) { //char a[] dan int b adalah parameter untuk menyimpan argument yang dikirim
	printf("Nama saya %s, berusia %d\n", a, b);
}

void daisuki(char my_name[])
{
	printf("Aku suka mita! dan mita suka %s", my_name);
}

int main() {
	perkenalan("diandra", 15); //"diandra" dan 15 merupakan nilai yang dikirim ke function perkenalan (argumen).
	daisuki("diqdrq");
	return 0;
}
