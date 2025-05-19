#include <stdio.h>
#include <string.h>

int main() {
	int on = 1;
	int off = 0;
	int sementara;

	sementara = on;
	on = off;
	off = sementara;

	printf("on = %d\noff = %d\n", on, off);

	printf("=========\n");

	char true_value[3] = "HIDUP"; //6 element
	char false_value[3] = "MATI"; //5 element
								 /*Pastikan kalian memberi ruang yang cukup untuk pertukaran value, karena value yang dari awal
								  * telah ditentukan saat deklerasi variabel array, akan menggunakan ruang sesuai element yang 
								  * value yang dideklerasikan tersebut. Gini dari awal aku udah ngasih value "HIDUP" artinya 5 element + null terminator
								  * , Jadinya array tersebut jumlah tetap-nya sekarang 6. Ketika array false_value ditimpa oleh true_value, yang terjadi akan bufferoverflow
								  * karena false_value akan menimpa alamat memori sebelah-nya true_value yang menyebabkan true_value nilainya jadi korup.*/
	char temp[10];

	strcpy(temp, true_value);
	strcpy(true_value, false_value);
	strcpy(false_value, temp);

	printf("true = %p\nfalse = %p\n", true_value, false_value);
	return 0;
}
