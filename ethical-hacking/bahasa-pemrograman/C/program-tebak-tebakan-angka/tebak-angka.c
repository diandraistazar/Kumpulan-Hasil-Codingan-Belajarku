#include <stdio.h>
#include <stdlib.h> //untuk menggunakan fungsi srand() dan rand()
#include <time.h> //untuk menggunakan fungsi time()

typedef struct {
	bool isActive;
	int jumlah_nyawa;
} isNyawa ;

int main()
{
	//massage
	char *costum_massage[] =
	{
		"Tebak angka dari %d - %d: (%d left) ", //print teks awal (with nyawa)
		"Tebak angka dari %d - %d: ", //print teks awal (no nyawa)
		"Angka mu '%d' lebih KECIL dari tebakan!", //print tebakan lebih kecil
		"Angka mu '%d' lebih BESAR dari tebakan!", //print tebakan lebih besar
		"Tebakanmu tidak valid!", //print tebakan tidak valid
		"TEBAKANMU BENAR! Jawabannya adalah %d!", //print tebakan benar
		"Yah.. Kamu gagal :), nyawamu telah habis.\n" //print gagal
	};	

	int user_tebak = 0;
	int rentang[2] = { 1, 20 }; //rentang tebakan
	isNyawa user = { .isActive = true, .jumlah_nyawa = 5 }; //setting
	
	srand(time(0)); //menentukan seed berdasarkan waktu time()
	int tebak = rand() % rentang[1] + rentang[0]; //menentukan tebakan berdasarkan angka acak

	while (true)
	{
		if(user.isActive && !(user.jumlah_nyawa >= 0)) //mengecek apakah nyawa masih ada
		{
			printf(costum_massage[6]);
			break;
		}

		//get user input
		if(user.isActive) //input dengan nyawa
		{
			printf(costum_massage[0], rentang[0], rentang[1], user.jumlah_nyawa);
		}
		else //input dengan nyawa
		{
			printf(costum_massage[1], rentang[0], rentang[1]);
		}
		scanf("%d", &user_tebak);

		if(user_tebak < tebak && user_tebak >= rentang[0]) //jika tebakannya lebih kecil dari tebakan
		{
			printf(costum_massage[2], user_tebak);
			user.jumlah_nyawa--;
		}
		else if(user_tebak > tebak && user_tebak <= rentang[1]) //jika tebakannya lebih besar dari tebakan
		{
			printf(costum_massage[3], user_tebak);
			user.jumlah_nyawa--;
		}
		else if(user_tebak == tebak) //jika tebakannya benar
		{
			printf(costum_massage[5], tebak);
			break;
		}
		else //jika tebakannya tidak valid
		{
			printf(costum_massage[4]);
		}

		printf("\n\n########################################\n\n");
	}
}
