/*psuedo numbers = merupakan angka yang tampak acak yang ternyata
 * 					dihasilkan dari algoritma determinsik. Artinya angka
 * 					tersebut tidak benar-benar acak hanya meniru keacakan.*/

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
	srand(time(0)); /*untuk menentukan SEED rand, maksudnya angka acak yang muncul, jika seed nya sama dengan sebelumnnya
				maka angka acaknya sama*/
	int number = (rand() % 10) + 1;
	printf("%d\n",number);
	return 0;
}
