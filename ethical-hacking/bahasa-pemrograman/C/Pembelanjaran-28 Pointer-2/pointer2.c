#include <stdio.h>

// printPointer
void printPointer(int* number);

/* pointer = pointer adalah variabel yang berfungsi
 * 			 menyimpan alamat memori variabel lain.*/
/* Kenapa harus menggunakan pointer?
 * - Program menjadi lebih cepat saat eksekusi 
 * - bekerja dengan variabel asli
 * - Memungkinkan membuat struktur data seperti linked-list, stack, queque
 * - Mengembalikan lebih dari satu nilai dari function
 * - Mencari dan mengurutkan data yang besar lebih mudah
 * - Alokasi memori yang dinamis*/

/* gunakan * (indirection operator) untuk mengakses isi alamat memori dari variabel pointer */

/* indirection operator atau dikenal operator deferensi merupakan operator yang digunakan
 * untuk mengakses nilai yang disimpan alamat memori yang ditunjuk atau disimpan pointer.*/

int main()
{
	int x = 10;
	int* y = &x; // untuk mendeklerasikan pointer gunakan * setelah tipe data
				 // note: Pastikan pointer memiliki tipe data yang sama dengan alamat memori
				 // 	  yang ditunjukknya.
				 // int *y = &x; atau int* y = &x; atau bahkan int * y = &x;. Pokoknya setelah tipe data dan sebelum label variabel

	printf("address of x: %p\n", &x); // print alamat memori variabel x
	printf("value of x: %d\n", x); // print isi variabel x

	printf("\n");

	printf("address of y: %p\n", &y); // print alamat memori poiter y (menggunakan &)
	printf("value of y: %p\n", y); // print isi alamat memori pointer y (menggunakan label variabel)
	printf("value of address x at pointer y: %d", *y); // (operator deferensi) print isi alamat memori yang berada didalam alamat memori pointer y (mengguankan * sebelum label variabel)

	printf("\n\n");

	printPointer(y);
	return 0;
}

void printPointer(int* number)
{
	printf("Your Number is %d\n", *number); // deferensi
											// output = 10
}
