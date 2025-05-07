#include <stdio.h>
#include <math.h>

int main() {
	char operator;
	double num1;
	double num2;
	double hasil;

	printf("\nMasukkan operator ( + - * / % ): ");
	scanf("%c", &operator);

	printf("Angka Pertama: ");
	scanf("%lf", &num1);

	printf("Angka Kedua: ");
	scanf("%lf", &num2);

	switch(operator) { /*Kita tidak dapat langsung "hasil = num1 operator num2; itu tidak akan bekerja,
											 dan compiler akan menggapnnya seperti "hasil = 1 '+' 2;", apa itu value tipe data karakter
											 di tengah-tengah, jelas akan error, sebaiknya gunakan switch atau if-else"*/
		case '+':
			hasil = num1 + num2;
			break;
		case '-':
			hasil = num1 - num2;
			break;
		case '*':
			hasil = num1 * num2;
			break;
		case '/':
			hasil = num1 / num2;
			break;
		case '%':
			/*hasil = num1 % num2; tidak dapat langsung menggunakan %,
			 * operator tersebut hanya untuk int dan long, tidak tersedia untuk tipe data desimal, sebaiknya gunakan fungsi math.h*/
			hasil = fmod(num1, num2);
			break;
	}

	printf("\n%.1lf %c %.1lf = %.1lf",num1, operator, num2, hasil);

	printf("\n");
	return 0;
}
