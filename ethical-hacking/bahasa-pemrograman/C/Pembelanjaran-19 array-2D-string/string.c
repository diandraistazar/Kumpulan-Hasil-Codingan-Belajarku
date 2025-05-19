/*tidak ada hal khusus, sesi kali ini cuman mempraktekan cara mengganti element string literal pada array 2D*/

#include <stdio.h>
#include <string.h>

int main() {
	char nama[][8] = {"diandra", "marie", "fern"}; /*mungkin kalian bingung kenapa bagian rows aku mengisi nilai kosong
													Dalam array 2D kalian boleh tidak mengisi bagian rows, yang tidak boleh
													jika kalian tidak mengisi columns. Lalu saat memprint nama[0] itu artinya
													aku mengoutput baris indeks 0 atau baris pertama secara seluruh. Jika kalian
													tentukan colums nya secara eksplisit itu artinya mengoutput bagian tertentu*/
	strcpy(nama[0], "ubel"); /*menimpa "diandra" menjadi "ubel"*/
	printf("%s\n", nama[0]);
	return 0;
}
