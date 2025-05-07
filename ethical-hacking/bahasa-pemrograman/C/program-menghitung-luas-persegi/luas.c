#include <stdio.h> 

void main() {
	/* Program ini merupakan program sederhana untuk menghitung panjang dari persegi panjang dengan meminta input pengguna panjang dan lebar
	 * */	

	int panjang;
	int lebar;
	int luas;

	printf("\nMasukkan panjang: ");
	scanf("%d", &panjang);

	printf("Masukkan lebar: ");
	scanf("%d", &lebar);

	luas = (panjang * lebar);
	printf("\nLuas persegi dengan panjang %i dan lebar %i adalah %i\n", panjang, lebar, luas);

}
