#include <stdio.h>

int main()
{
	/*bitwise operation = bitwise operation adalah operasi manipulasi pada level bit.*/
	/*Operations: 
	 * & = AND
	 * | = OR
	 * ^ = XOR
	 * << = LEFT SHIFT
	 * >> = RIGHT SHIFT
	 * ~ = NOT*/
	int x;

	// & (AND)
	x = 4; //00000100
	x = x & 2; /*Operation &:	00000100 --> 4
								00000010 --> 2
								-------- &
								00000000 --> 0;*/
	printf("x(&) = %d\n", x); //output = 0
	/*Operator & mirip seperti && bahkan sebenarnya sama cuman beda level saja.
	 * Dalam && kan ketika kedua kondisi true atau 1, maka akan menghasikan true atau 1.
	 * Selain itu, maka akan menghasilkan false atau 0. Nah mirip-mirip saja bedanya kita mengguankan 1 atau 0.*/
	
	// | (OR)
	x = 6;
	x = 6 | 5; /*Operation |:	00000110 --> 6
								00000101 --> 5
								-------- |
								00000111 --> 7*/
	printf("x(|) = %d\n",x); // output = 7
	/*Operator | juga mirip seperti || pada conditional statement, jadi seharusnya aku tidak akan
	 * menjelaskan panjang lebar. Pokoknya jika SALAH SATUNYA menghasilkan true atau 1 maka akan menghasilkan
	 * true.*/

	// ^ (XOR)
	x = 6;
	x = 6 ^ 5; /*Operation ^:	00000110 --> 6
								00000101 --> 5
								-------- ^
								00000011 --> 3*/
	printf("x(^) = %d\n",x); // output = 3
	
	// << (SHIFT LEFT)
	x = 6;
	x = 6 << 5; /*Operation <<:	6 << 5				x = a * 2^b
				  									x = 6 * 2^5
													x = 6 * 32
								11000000 --> 192	x = 192*/
	printf("x(<<) = %d\n",x); // output = 192
	/*Operator << akan mengeser bit sesuai jumlah yang ditentukan
	 * dalam kasus ini kita akan menggesert angka 6 sebanyak 5 bit.
	 * jadi 6 << 5 artinya begitu. Kita tidak perlu capek-capek menghitungnya
	 * kita bisa menggunkaan rumus matematika
	 * 			a = a * (2^b)
	 * 	rumus ini akan menghitung << dengan cara yang mudah.*/

	// >> (SHIFT RIGHT)
	x = 6;
	x = 6 >> 2; /*Operation >>: 6 >> 2				x = a / 2^b
													x = 6 / 2^2
													x = 6 / 4
													x = 6 / 4
													x = 1
													00000001 --> 1*/
	printf("x(>>) = %d\n",x); // output = 1
	/*Operator >> sama seperti SHIFT LEFT, tetapi ini SHIFT RIGHT yang mana menggeser
	 * bit ke kanan sesuai jumlah. Ada juga rumusnya
	 * 			a = a / (2^b)
	 * 	dengan rumus ini dalam melakukan perhitungan pada bilangan biner akan menjadi
	 * 	lebih mudah dan cepat*/

	// ~ (NOT)
	x = ~10;/*Operation ~: 6		00000110
								-------- ~
								11111001 --> 249*/
	printf("x(~) = %d\n",x); // output (unsigned)= 259
							 // output (signed) = -7
	/*Operator ~ mirip seperti ! pada conditional statement, itu akan mengembalikan kondisi
	 * kalau dalam bitwise operation angka 1 akan menjadi 0, dan 0 akan menjadi 1. dah begitu saja*/
	return 0;
}
