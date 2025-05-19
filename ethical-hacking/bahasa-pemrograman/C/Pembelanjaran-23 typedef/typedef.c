/*typedef = typedef merupakan keyword yang digunakan untuk membuat alias / nama lain
 * 			untuk tipe data yang ada. Jadi jika ingin mengubah char menjadi keyword lain.
 *
*sintaks = typedef <data types> <another-name>*/

#include <stdio.h>

typedef char user[10];
typedef int usia;
typedef struct {
	char waifu[10];
	char anime[20];
} Waifu ;

int main()
{
	user A = {'A'};
	usia mita = 16;
	printf("%c dan %d\n", A[0], mita);

	Waifu ubel = { .anime = "Sousou no frieren", .waifu = "Ubel" };
	printf("%s from %s\n", ubel.waifu, ubel.anime);
	return 0;
}
