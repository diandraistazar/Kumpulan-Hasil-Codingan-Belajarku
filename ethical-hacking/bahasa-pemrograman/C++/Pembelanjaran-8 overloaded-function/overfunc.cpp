/* overloaded function merupakan konsep dimana function di deklerasikan lebih dari sekali, tetapi memiliki parameter atau tipe data yang berbeda.
	dengan begitu, function dapat menghandle lebih dari satu parameter atau semacam itu
	Kalau bingung, gini deh ada function yang terdapat 2 paramter dan function 3 paramter. Mereka berdua memiliki tipe data yang sama, label yang sama. Hanya yang berbeda
	dari mereka adalah paramter dan statement function. Function pertama hanya menghandle 2 argument yaitu value1 dan value2, dan anggapnya functionnya melakukan mana yang lebih besar maka itu yang direturn
	Sementara, function ke-dua kurang lebih melakukan hal yang sama, hanya terdapat paramter tambahan yang menentukan operasi apa yang dilakukan
	Kalau bingung berikut demonstrasinya
*/

#include<iostream>

short getMax(short a, short b);           // hanya menerima 2 paramter, dan operasinya hanya melakukan siapa yang paling besar
short getMax(short a, short b, char op);  // Menerima 3 paramter, dan secara eksplisit menentukan operasi apa yang akan dilakukan

int main(void)
{
	short a = 10,
	      b = 20,
			c;
	
	// Hanya 2 argument, maka function yang memiliki 2 paramter saja yang digunakan
	c = getMax(a, b);
	std::cout << "Function1 = " << c << '\n'; // output = 20

	// 3 argument, maka function yang memiliki 3 paramter saja yang digunakan
	c = getMax(a, b, '<');
	std::cout << "Function2 = " << c << '\n'; // output = 10
	
	// Nah dengan begini, function dapat menjadi fleksibel dapat menghandle argument lebih dari satu atau melakukan operasi yang sedikit berbeda
	return 0;
}

short getMax(short a, short b)
{
	if(a > b)
		return a;
	else
		return b;
}

short getMax(short a, short b, char op)
{
	switch(op)
	{
		case '>': if(a > b) return a;
					 else return b;
		case '<': if(a < b) return a;
					 else return b;
		case '=': if(a == b) return 1;
					 else return 0;
		default:  return -1;
	}
}
