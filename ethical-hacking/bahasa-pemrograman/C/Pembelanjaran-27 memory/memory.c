#include <stdio.h>

/* Kali ini kita hanya akan membahas secara singkat mengenai memori, bagaimana variabel ini disimpan di memori.*/
/* Memory = Memory merupakan penyimpanan data seperti variabel, value, dan sebagianya di RAM. Memory itu berupa kumpulan byte, yang artinya
 *			satu byte itu 8 bit berarti satu byte dapat menyimpan 8 bit. */

/* Memory Block = Memory block merupakan satu byte yang digunakan oleh satu unit. Kalau char itu kan 1 byte kan ya artinya hanya menggunakan
 * 				  satu slot atau satu byte di memori.*/

/* Memory Address = Memory address merupakan alamat byte di memori. Gini deh aku buat array bertipe int yang berisi 2 value 1 dan 2. Karena mereka array
 * 					di memori mereka akan disimpan berdekatan dan berurutan. Karena int itu 4 byte, nanti alamat memorinya akan melompat setiap 4 byte.
 * 					Seperti 4, 8, 12, 16 gitu deh. Karena int menyewa 4 byte untuk menyimpan nilai tersebut*/
// Semoga paham sih


int main()
{
	char a = 'A'; /* aku mendeklerasikan variabel yang berisi charachter 'A'. Karena tipe data char hanya memakan 1 byte, 
					maka dimemori ia hanya menggunakan satu slot dan berisi alamat memori*/

	int b = 1; /* aku mendeklerasikan variabel yang berisi integer 1. Karena tipe data int memakan 4 byte, ia akan
					menyewa sejumlah 4 byte untuk menyimpan integer 1 ini, meski int 1 ini di memori hanya 1 byte 00000001, tetapi ketika nilainya lebih besar
					ia akan memakan lebih dari 1 byte*/

	return 0;
}
