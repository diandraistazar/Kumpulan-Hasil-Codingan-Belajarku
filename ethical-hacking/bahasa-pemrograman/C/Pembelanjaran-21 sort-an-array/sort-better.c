/*Program ini merupakan program yang telah diperbaiki untuk dapat mengurutkan
 * angka dalam array, meski angka tersebut lompat satu kali atau lebih.
 * Karena kali ini aku telah mempelajari bubble sorting, yakni merupakan algoritma sederhana
 * dalam mengurutkan element dalam array.*/

#include <stdio.h>

void sort_array(int[],int); //fungsi untuk mengurutkan array
void print_array(int[],int); //fungsi untuk meanmpilkan isi array

int main () {
	int numbers[] = {9,2,1,4,7,5,6,8};
	int size = sizeof(numbers)/sizeof(numbers[0]);
	sort_array(numbers, size);
	print_array(numbers, size);
	return 0;
}

void sort_array(int array[], int size)
{
	for(int pertama = 1; pertama <= size-1; pertama+=1)
	{
		for(int kedua = 0; kedua < size-pertama; kedua++)
		{
			if(array[kedua] > array[kedua+1])
			{
				int temp = array[kedua];
				array[kedua] = array[kedua+1];
				array[kedua+1] = temp;
			}
		}
	}
}

void print_array(int array[], int size)
{
	for(int x = 0; x < size; x++)
	{
		printf("%d ", array[x]);
	}
	printf("\n");
}
