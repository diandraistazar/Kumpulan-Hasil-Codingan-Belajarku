/*Function Prototypes: Function prototypes adalah fungsi yang hanya mendeklerasikan tipe data yang dikembalikan
 * 					   , tipe data parameter, dan nama fungsinya sendiri tanpa memuat apa yang dilakukan function
 * 					   tersebut*/
#include <stdio.h> 

int kalidong(int pertama, int kedua); /*fungsi prototypes. hanya memberi informasi mengenai tipe data yang dikembalikan,
										nama fungsi, dan parameternya tanpa isinya.*/
int kalidong(int, int); /*Hanya tipe datanya tanpa memberikan nama juga bisa*/

int main() {
	int x = kalidong(5,5); //memanggil fungsi prototype dari kalidong()
	printf("%d\n", x);
	return 0;
}

int kalidong(int pertama, int kedua) { //mendefinisikan fungsi utuhnya dari kalidong()
	return pertama * kedua;
} 

/*Hasilnya 25, jadi meski hanya memberitahu compiler bahwa ada fungsi kalidong tanda memberitahu detail isi fungsi-nya
 *, programnya tetap bekerja semestinya. Ini karena function prototype. Kita deklerasi dulu fungsinya, setelah itu
 mendifinisikan fungsinya secara penuh.*/
