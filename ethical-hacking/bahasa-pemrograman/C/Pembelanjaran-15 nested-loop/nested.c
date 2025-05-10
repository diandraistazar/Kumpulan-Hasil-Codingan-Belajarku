/*nested loop merupakan loop yang didalamnya terdapat loop lagi, jadi disebut loop bercabang*/
/*sekarang aku akan membuat sebuah program yang mencetak kolom dan baris*/

#include <stdio.h>

int main() {
	long kolom;
	long baris;
	
	int panjang;
	int lebar;

	char lebar_karak;
	char panjang_karak;

	printf("Berapa kolom: "); //meminta berapa kolom
	scanf("%d", &kolom);

	printf("Berapa baris: "); //meminta berapa baris
	scanf("%d", &baris);
	
	printf("Panjang: "); //meminta seberapa panjang vertical line
	scanf("%d", &panjang);

	printf("Lebar: "); // meminta seberapa panjang horizontal line
	scanf("%d", &lebar);

	printf("Panjang-karak: "); //meminta karakter apa yang diguankan pada vertical line
	scanf(" %c", &panjang_karak);

	printf("Lebar-karak: "); //meminta karakter apa yang digunakan untuk horizontal line
	scanf(" %c", &lebar_karak);
	
	//rows
	for(int b = 1; b <= baris; b++) {
		//line on top
		void top_line() {
		int lebarbak = lebar;
		for(int k = 1; k <= kolom; k++) {
			for(int l = 1; l <= lebarbak; l++) {
					printf("%c", lebar_karak);
					if(l == lebar) {
						lebarbak--;
					}
			}
		}
		}
		top_line();

		printf("\n");

		//line on left and right
		for(int p = 1; p <= panjang-1; p++) {
			printf("%c", panjang_karak);
			for(int k1 = 1; k1 <= kolom; k1++) {
				for(int space = 1; space < lebar-1; space++) {
					printf(" ");
				}
				printf("%c", panjang_karak);
			}
			printf("\n");
		}

		//final bottom line
		if(b == baris) {top_line(); printf("\n");}
	}
}

/*anjay program membuat tabel, akhirnya jadi coy, meski kurang sempurna sih*/
