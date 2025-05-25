#include <stdio.h>
#include <stdlib.h> // untuk menggunakan malloc();

/* Sesuai namanya, file ini akan beris latihan dari pointer. Aku melatih diri ku
 * 5 soal dari yang mudah dan ke tingkat yang lumayan susah.*/

void moreSpace()
{
	printf("\n");
}

void swap(int* number1, int* number2)
{
	int temp = *number1;
	*number1 = *number2;
	*number2 = temp;
}

int kuadrat(int* number)
{
	return *number * *number;
}

int* allocMemoryHeap(int number)
{
	int* allocMemory = malloc(sizeof(int)); /* Mengalokasikan 4 byte (int) pada Memory heap, setelah itu simpan
												alamat memori nya di variabel pointer allocMemory */
	if( allocMemory != NULL )
	{
		*allocMemory = number; // Mengisi Alamat memori yang dialokasikan tersebut dengan nilai yang diberikan
	}
	return allocMemory; // kembalikan alamat memori yang ditunjuk pointer allocMemory
}

int main()
{	
	moreSpace();
	// Soal 1: Menyimpan, mengakses, dan menampilkan pada pointer
	int x = 25;
	int* pX = &x;

	printf("Value of x = %d\n", x); // access
	printf("Address of x = %p\n", &x); // alamat memori x
	printf("Value of pointer pX = %p\n", pX); // nilai dari pointer pX
	printf("Value at address in pointer y = %d\n", *pX); // deferencing
	
	moreSpace();
	// Soal 2: Swap value with pointer
	int a = 20;
	int b = 10;

	int* pA = &a; // pointer menunjuk variabel a
	int* pB = &b; // pointer menunjuk variabel b
	
	printf("(Before) Value of a = %d\n", a);
	printf("(Before) Value of b = %d\n", b);

	swap(pA, pB); // fungsi yang digunakan untuk menukar nilai dari 2 pointer
	printf("####################\n");

	printf("(After) Value of a = %d\n", a);
	printf("(After) Value of b = %d\n", b);

	moreSpace();
	// Soal 3: Mencetak isi array menggunakan pointer arithmetic
	// pointer arithmetic memungkinkan operasi matematika pada pointer seperti
	// pemjumlahan, pengurangan, pembagian, perkalian, dan sisa. Dengan pointer arithmetic
	// memungkinkan pointer untuk berpindah dari alamat memori satu ke alamat memori lain di memori.
	int numbers[] = { 1,2,3,4,5 };
	int sz_numbers = sizeof(numbers)/sizeof(numbers[0]);
	int* pNumbers = &numbers[0];

	for(int x = 0; x < sz_numbers; x++)
	{
		printf("Element %d: %d\n",x+1 ,*pNumbers++);
	}

	moreSpace();
	// Soal 4: Pointer ke fungsi kuadrat
	int z = 10;
	int* pZ = &z;
	int (*pKuadrat)(int* number) = kuadrat; // pointer yang menunjuk function
	int z_kuadrat = pKuadrat(pZ);

	printf("Hasil kuadrat %d adalah %d.\n",z, z_kuadrat);
	
	moreSpace();

	// Soal 5: Mengembalikan pointer dari fungsi
	int* pAngka = allocMemoryHeap(10); // memanggil function untuk mengalokasikan memori bagi argument beruapa int yang dikirim
	printf("Address of value pAngka = %p\n", pAngka); // alamat memori yang ditunjuk pointer pAngka
	printf("Value of the address = %d\n", *pAngka); // isi alamat memori yang ditunjuk pointer pAngka
}
