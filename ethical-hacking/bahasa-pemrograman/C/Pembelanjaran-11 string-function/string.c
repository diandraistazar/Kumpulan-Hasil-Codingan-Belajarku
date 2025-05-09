#include <stdio.h>
#include <string.h> //menginclude library string function
#include <ctype.h> //menginclude library karakter manipulation

/*mempelajari fungsi-fungsi dari library string.h*/

void fn_tolower(char[]);
void fn_toupper(char[]);
void fn_strcat(char[],char[]);
void fn_strcpy(char[], char[]);
void fn_strncpy(char[], char[], int);
void reset_nama(char[], char[]);

int main() {
	char *mempelajari[] = {
		"tolower(<karakter>)", //fungsi untuk mengubah karakter menjadi huruf kecil semua
		"toupper(<karakter>)", //fungsi untuk mengubah karakter menjadi huruf besar semua
							
		"strcat(<string1>, <string2>)", //fungsi untuk menambahkan 'string2' ke akhir string pada 'string1'

		"strcpy(<string1>, <string2>)", //fungsi untuk mengsalin "string2" ke "string1"
		"strncpy(<string1>, <string2>, <number>)", //fungsi untuk mengsalin n karakter 'string2' ke 'string1'

		/*Sebenarnya masih ada lagi selain ini, jadi kalian bisa melihat secara lengkapnya di internet*/
	};
	
	char nama[15] = "DiaNdra";
	char julukan[10] = "Jelek";
	char backup[15];
	strcpy(backup, nama);
	printf("original: %s %s\n\n", nama, julukan);
	fn_tolower(nama); fn_toupper(nama); fn_strcat(nama, julukan); fn_strcpy(nama, julukan);
	reset_nama(nama, backup);
	fn_strncpy(nama, julukan, 2);
	reset_nama(nama, backup);
}

void reset_nama(char nama[], char backup[]) {
	strcpy(nama, backup);
}

//fn_tolower() function
void fn_tolower(char string[]) {
	//fungsi tolower() untuk mengubah karakter menjadi huruf kecil
	//lalu, bagaimana cara mengubah string dengan fungsi untuk karakter? bisa diakali dengan menggunakan loop for
	char nama[10];
	for (int x = 0; x < sizeof(string); x++) {
		nama[x] = tolower(string[x]);
	}
	printf("fn_tolower = %s\n",nama);
}

//fn_toupper() function
void fn_toupper(char string[]) {
	//fungsi toupper() untuk mengubah karakter menjadi huruf besar
	//lalu, bagaimana cara mengubah string dengan fungsi untuk karakter? bisa diakali dengan menggunakan loop for
	char nama[10];
	for (int x = 0; x < sizeof(string); x++) {
		nama[x] = toupper(string[x]);
	}
	printf("fn_toupper = %s\n", nama);
}

//fn_strcat() function
void fn_strcat(char string1[], char string2[]) {
	//fungsi strcat() untuk menggambungkan 2 string menjadi satu
	strcat(string1, string2);
	printf("fn_strcat = %s\n", string1);
}

void fn_strcpy(char string1[], char string2[]) {
	//fungsi strcpy() untuk menyalin string literal 2 ke string literal 1
	strcpy(string1, string2);
	printf("fn_strcpy = %s\n", string1);
}

void fn_strncpy(char string1[], char string2[], int number) {
	//fungsi stncpy() untuk menyalin karakter tertentu dari string2 ke string1
	strncpy(string1, string2, number);
	printf("fn_strncpy = %s\n", string1);
}
