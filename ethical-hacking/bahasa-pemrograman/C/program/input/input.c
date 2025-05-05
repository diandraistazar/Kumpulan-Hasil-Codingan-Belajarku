#include <stdio.h>

int main() {
	char user_input[20]; // membuat alamat memori yang isinya kosong
	printf("Who are you ? ");
	scanf("%s", user_input); // maksudnya akan menerima input berupaa integer %i, lalu disimpan di alamat memori user_input
	printf("Oh., Welcome back %s\n", user_input); // menampilkan isinya

	int c;
  while ((c = getchar()) != '\n' && c != EOF);

	char old[3];
	printf("How old are you ? ");
	fgets(old ,sizeof(old), stdin); // fgets hanya dapat membaca string, jika ingin membaca int, maka ubah tipe datanya jadi char
	printf("Your old is %s\n", old); // error
}
