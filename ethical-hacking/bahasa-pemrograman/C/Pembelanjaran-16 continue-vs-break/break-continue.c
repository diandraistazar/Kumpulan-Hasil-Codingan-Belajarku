/*break = break digunakan untuk mengakhiri operasi pada switch, for, while.
 * 		  - dalam switch break digunakan untuk menghentikan perbandingan, dengan break kita tidak perlu mengeksekusi
 * 		  	statement kondisi lain.
 * 		  - dalam for dan while untuk menghentikan pengulangan dan lanjut eksekusi statement berikutnya, jadi meski
 * 		  	masih terdapat beberapa pengulangan, atau belum saatnya berhenti, dengan break kita dapat menghentikan
 * 		  	pengulangan tersebut*/

/*continue = continue biasanya digunakan pada pengulangan for dan while. Fungsinya untuk melanjutkan ke pengulangan selanjutnya
 * 		  	 meski statement selanjutnya tidak dieksekusi. Jadi ketika bertemu continue for atau while akan lanjut pengulangan selanjutnya
 * 		  	 tanpa memedulikan statement selanjutnya yang akan dieksekusi.*/

//btw ini jadi mirip program yak?, gpp kali buat belajar jg

#include <stdio.h>
#include <string.h> //untuk menggunakan fungsi strlen(), strcmp()

void break_fn(char[]);
void continue_fn(char[]);
void remove_newline(char []);
	
int main() {
	char* thedoyouwant[] = { "switch", "looping", "for-loop", "while-loop" };
	char select[15];
	char* choice[2] = { "break", "continue" };
	printf("[1] %s atau %s? ", choice[0], choice[1]);
	fgets(select, sizeof(select), stdin);
	remove_newline(select);
	//printf("%s(%d) dan %s(%d)\n", select,strlen(select), choice[0],strlen(choice[0]));

	

	if(strcmp(select, choice[0]) == 0) { //kondisi jika "break"
		/*strcmp() merupakan fungsi untuk membandingkan kedua string dengan membandingkan character asci dalam angka satu-persatu
		 *jika perbandingannya hasilnya sama, strcmp() akan return 0 yang artinya "sama"
		  jika perbandingannya tidak sama, strcmp() akan return < 0 atau > 0 tergantung karakter yang dibandingkan
		  Sintaks: strcmp(<string1>,<string2>)*/
		printf("[2] %s atau %s? ", thedoyouwant[0], thedoyouwant[1]);
		fgets(select, sizeof(select), stdin);
		remove_newline(select);
		break_fn(select); 
	}
	else if(strcmp(select, choice[1]) == 0) { //kondisi jika "continue"
		printf("[2] %s atau %s? ", thedoyouwant[2], thedoyouwant[3]);
		fgets(select, sizeof(select), stdin);
		remove_newline(select);
		continue_fn(select); 
	}

	return 0;
}

void remove_newline(char array[]) {
	array[strlen(array)-1] = '\0';
}

void break_fn(char mode[]) {
	if(strcmp(mode, "switch") == 0) { //kondisi jika switch
		int condition;
		int input[2] = { 1, 0 };
		printf("[3] Masukkan angka %d / %d: ", input[0], input[1]);
		scanf("%d", &condition);

		switch(condition) {
			case 1:
				printf("Keadaan \"ON\"!");
				break;
			case 0:
				printf("Keadaan \"OFF\"!");
				break;
			default:
				printf("%d tidak masuk dalam pilihan. Tolong masukkan angka antara 1 atau 0.");

				/*Bisa dilihat terdapat 2 breaks yang digunakan untuk mengakhiri perbandingan. Jika saja break case pertama tidak ada
				 *program akan tetap mengeksekusi case kedua meski kondisinya salah*/
		}
		printf("\n");
	}
	else if(strcmp(mode, "looping") == 0) { //kondisi jika looping
		void exit_massage() {
			printf("Telah terhenti.\n");
		}
		char condition[15];
		char* looping[2] = { "for-loop", "while-loop" };
		char* confirm[2] = { "yes", "no" };
		printf("[3] Masukkan %s atau %s: ", looping[0], looping[1]);
		fgets(condition, sizeof(condition), stdin);
		condition[strlen(condition) - 1] = '\0';

		if(strcmp(condition, looping[0]) == 0) { //kondisi jika for-loop
			for(int index = 0; index < 20; index+=1) {
				char input[5];
				printf("[%s mode] Pengulangan ke-%d, apa kau ingin berhenti? (yes or no) ",looping[0],index+1);
				fgets(input, sizeof(input), stdin);
				input[strlen(input)-1] = '\0';

				if(strcmp(input, confirm[0]) == 0) { //kondisi jika "yes"
					exit_massage();
					break;
				}
				//kondisi jika "false" tidak mengeksekusi apa-apa, dan pengulangan tetap dilanjutkan
			}
		}
		else if(true) { //kondisi jika while-loop
			int index = 0;
			while(true) {
				char input[5];
				printf("[%s mode] Pengulangan ke-%d, apa kau ingin berhenti? (yes or no) ",looping[1],index+1);
				fgets(input, sizeof(input), stdin);
				input[strlen(input)-1] = '\0';

				if(strcmp(input, confirm[0]) == 0) { //kondisi jika "yes"
					exit_massage();
					break;
				}
				//kondisi jika "false" tidak mengeksekusi apa-apa, dan pengulangan tetap dilanjutkan
				index++;
			}
		}
	}
}

void continue_fn(char mode[]) {
	if(strcmp(mode, "for-loop") == 0) { //kondisi jika for-loop
		for(int x = 0; x < 100; x++) {
			char input[15];
			printf("[for-loop mode] apa kau ingin lanjut iterasi (yes), atau eksekusi statement berikutnya (no)? (%d) ", x);
			fgets(input, sizeof(input), stdin);
			remove_newline(input);

			if(strcmp(input, "yes") == 0) {
				continue;
			}
			else if(strcmp(input, "aku suka fern") == 0) { printf("Wah kamu bisa tahu wkwkwk\n"); break; }
			printf("Kamu benar tidak menyadarinya?\n");
		}
	}
	else if(true) { //kondisi jika while-loop
		int x = 1;
		while(true) {
			char input[17];
			printf("[while-loop mode] apa kau ingin lanjut iterasi (yes), atau eksekusi statement berikutnya (no) (%d)? ", x);
			fgets(input, sizeof(input), stdin);
			remove_newline(input);

			if(strcmp(input, "yes") == 0) { 
				x++;
				continue;
			}
			else if(strcmp(input, "ubel boleh juga") == 0) { printf("GILA bisa tahu gitu lo.\n"); break; }
			printf("Apa kau tidak sadar?\n");
			x++;
		}
	}
}
