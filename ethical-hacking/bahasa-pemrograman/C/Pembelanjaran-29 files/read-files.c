#include <stdio.h>
#include <string.h>

/* fgets() = berfungsi untuk membaca baris teks dari sebuah aliran (seperti file atau input standar),
 * 			setelah dibaca akan diubah menjadi string. fgets() membaca aliran sampai \n (newline),
 * 			karena itu merupakan titik akhir, setelah itu menambahkan null terminator sebagai penanda
 * 			akhir string*/

/* aliran = saya sudah menyebutkan aliran di penjelasan fgets() dan sebelum-sebelumnnya. Lalu apa maksud
 * 			aliran tersebut? Dari pemahaman yang kudapat aliran atau stream merupakan serangkaian
 * 			CHARACTER yang ditransfer antara program dan perangkat input/output. Jadi aliran atau stream 
 * 			memungkin program untuk membaca aliran dari input atau output serta file.*/

/* ftell() = berfungsi untuk memberitahu posisi pointer pada file dengan format byte */

int main()
{
	FILE *pFile = fopen("sapa.txt", "r");
	char string[100];
	if( pFile == NULL )
	{
		printf("file \"sapa.txt\" tidak ditemukan\n");
	}
	else
	{
		long pos;
		while(fgets(string, sizeof(string), pFile) != NULL)
		{	
			pos = ftell(pFile);
			string[strlen(string)-1] = '\0';
			printf("%s (%d)\n", string, pos);
		}
	}
}
