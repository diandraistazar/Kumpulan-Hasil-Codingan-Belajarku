/*do-while-loop = merupakan perulangan yang sama dengan while dan for, cuman do-while-loop akan selalu menjalankan blok kodenya
 * 				  setelah itu mengecek kondisinya, meskipun kondisinya false blok kode pertama-tama akan selalu dijalankan.
 * 				  seperti while cuman dibalik*/
/*sintaks do-while = do{<statement>}while(<expression>);*/
#include <stdio.h>

int main() {
	int number = 1;
	do{
		printf("angka-%d\n", number);
		number++;
	}while(number > 5); /*Meski kondisinya salah, blok kode akan dijalankan setidaknya satu sekali sebelum 
						  kondisi dicek, maka setelah itu karena kondisnya false blok kode tidak pernah dijalankan*/
	return 0;
}
