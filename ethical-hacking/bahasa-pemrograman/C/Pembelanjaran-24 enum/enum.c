/*enum = enum merupakan tipe data yang menyimpan variabel-variabel const (variabel tetap).
 * 		enum digunakan agar code menjadi lebih jelas dan mudah dibaca. Karena dengan enum
 * 		variabel const dapat dikelompokkan dan sesuai maksud. */

/*Note : Variabel dalam const merupakan variabel bertipe "int", yang artinya hanya dapat
 * 		menyimpan nilai yang bertipe integer untuk bahasa C. Artinya jika ingin menyimpan
 * 		string literal itu tidak akan pernah bekerja. Jika variabel enum tidak di insialisasi nilainya
 * 		secara default akan memberikan nilai int angka 0 dari variabel pertama, dan bertambah 1
 * 		seiring variabel, jadi seperti indeks.*/

/*sintaks = enum <nama> {<member>}*/

//jika ingin mendeklerasikan variabel untuk tujuan tertentu misalnya membuat variabel RESUME dan BACk,
//itu pasti kita harus definisikan variabelnya satu-satu. Cara ini memang bekerja dan sering digunakan
//cuman sekarang kita memiliki enum yang membuat variabel tadi dapat dikelompokkan sehingga lebih mudah dibaca.
int RESUME = 1;
int BACK = 0;

//Sekarang aku akan membuat hal yang sama tapi dalam enum, dengan begini variabel-variabel tersebut jelas
//tujuan pembuatannya untuk pilihan menu
enum menu { RESUME1, BACK1 }; //! menggunakan angka 1 agar variabelnya berbeda tetapi maksudnya tetap sama

enum Warna { BIRU, MERAH, KUNING };
enum Status { TUNGGU, SUKSES, ERROR };

#include <stdio.h>

int main()
{
	enum Warna pilihan = RED; /*ini merupakan variabel enum yang berfungsi untuk menyimpan nilai
								dari member suatu enum, contohnya disini MERAH*/
	printf("%d\n", pilihan);
	return 0;
}
