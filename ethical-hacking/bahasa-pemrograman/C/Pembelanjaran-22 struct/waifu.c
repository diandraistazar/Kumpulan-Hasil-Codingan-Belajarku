#include <stdio.h>
#include <string.h>

struct waifu {
	char nama[10], anime[20];
} mita, fern; /*Selain harus terus menerus menulis seperti "struct Waifu mita;"
		  untuk mendeklerasikan unit, kita juga bisa langsung mendeklerasikannya
		  setelah struct blueprintnya dibuat seperti yang kulakukan sekarang*/

int main()
{
	strcpy(mita.nama, "Mita");
	strcpy(mita.anime, "Miside"); /*Dengan begitu sisanya aku hanya perlu
									mengisi string dan menampilkannya*/

	printf("My waifu is %s from anime %s\n", mita.nama, mita.anime);

	strcpy(fern.nama, "Fern");
	strcpy(fern.anime, "Sousou-no-frieren");
	printf("My waifu is %s from anime %s\n", fern.nama, fern.anime);

	return 0;
}
