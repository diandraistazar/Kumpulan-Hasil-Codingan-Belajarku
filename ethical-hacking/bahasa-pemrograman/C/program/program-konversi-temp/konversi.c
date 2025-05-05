#include <stdio.h> //standar input dan output
#include <ctype.h> //library standar untuk mengklafikasikan dan mengubah karakter

int main() {
	double temp;
	char tanda;
	double hasil;

	printf("\nMasukkan F(ahrenheit) atau C(elcius): ");
	scanf("%c", &tanda);

	tanda = toupper(tanda); //fungsi untuk mengubah input user jadi huruf besar

	switch(tanda) {
		case 'F':
			printf("\n[%c] Masukkan suhu dalam Celcius yang ingin diubah ke Fahrenheit: ", tanda);
			scanf("%lf", &temp);
			hasil = (9.0 / 5.0 * temp) + 32.0;
			printf("%.2lf Celcius --> %.2lf Fahrenheit", temp, hasil);
			break;
		case 'C':
			printf("\n[%c] Masukkan suhu dalam Fahrenheit yang ingin diubah ke Celcius: ", tanda);
			scanf("%lf", &temp);
			hasil = (temp - 32.0) * 5.0 / 9.0;
			printf("%.2lf Fahrenheit --> %.2lf Celcius", temp, hasil);
			break;
	}

	printf("\n");
	return 0;
}
