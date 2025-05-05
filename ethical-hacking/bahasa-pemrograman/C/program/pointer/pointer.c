#include <stdio.h>

int main() {
	/*int number = 100;
	int *ptr = &number;
	printf("Hasil sebelum diubah %i\n", number);

	*ptr = 500; //mengubah nilai langsung dari alamat memorinya
	//number = 500; // mengubah nilai langsung dari variabelnya
	printf("Hasil setelah diubah %i\n", number);*/

	/*int a = 10;
	int b = 20;

	int *ptr1 = &a; // menyimpan alamat variabel a dari memori
	int *ptr2 = &b; // menyimpan alamat variabel b dari memori

	int temp = *ptr1;
	*ptr1 = *ptr2; // mengisi isi alamat variabel a menjadi isi alamat dari variabel b
	*ptr2 = temp; // begitu juga sebaliknya

	printf("Nilai variabel a adalah %d\n", a); // menampilkan hasilnya
	printf("Nilai variabel b adalah %d\n", b);*/

	int number[5] = {1,2,3,4,5};
	int *ptr = number;
	printf("%i ", *ptr);
	*ptr++;
	printf("%i ", *ptr);
	*ptr++;
	printf("%i ", *ptr);
	*ptr++;
	printf("%i ", *ptr);
	*ptr++;
	printf("%i\n", *ptr);
	return 0;
}
