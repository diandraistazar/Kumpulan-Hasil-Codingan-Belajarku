/*quiz = merupakan program sederhana yang mana program ini akan memberikan soal lalu kita sebagai player
 * akan menjawabnya. Soalnya dapat dikostumisasi bebas melalui kode sumber ini bagian variabel array questions.
 * Namun, karena ini pertama kalinya aku membuat program quiz pastinya memiliki kekurangan, terutama bagian pilihan
 * Pilihan yang benar selalu pilihan 'A' karena untuk sekarang aku belum bisa membuat pilihan yang acak.*/

/*Program ini singkat hanya 95 baris, meski begitu sudah memenuhi tujuan awal ku yakni membuat program quiz sederhana*/

#include <stdio.h>
#include <ctype.h>

//function prototypes
void clear();

char *questions[][4] = 
{
//	*Questions (0)															*The correct Answers (1)		*Another options (2-3)
	{"Siapa itu Linus Torvalds?", 											"Penemu kernel linux",			"Penemu Windows",		"Penemu FreeFire"},
	{"Manakah Window manager tersebut yang dikonfigurasi dalam bahasa C?",	"DWM",							"AWESOME",				"i3"},
	{"Manakah sambungan yang tepat untuk \"i use ****\"?",					"arch",							"ubuntu",				"fedora"},
	{"Apa itu rice?",														"tampilan desktop yang keren",	"proses ngecoding",		"memasak nasi"},
	{"DWM memiliki filosofi seperti?",										"fast, eficient, minimalist",	"hackable, hard, fast",	"hardest, open-source, lightweight"}
};
int siz_rows = sizeof(questions)/sizeof(questions[0]);
int siz_colums = sizeof(questions[0])/sizeof(questions[0][0]);
char pilihan[] = {'A', 'B', 'C'};

int main()
{
	char user_input;
	int user_input_convert;
	int BENAR = 0;
	int SALAH = 0;

	printf("note: cara memainkannya cukup perlu memilih jawaban yang BENAR. Poin akan ditampilkan setelah quiz selesai.\n\n");
	for(int y = 0; y < siz_rows; y++)
	{
		do{
		printf("%d. %s\n", y+1, questions[y][0]);
		for(int x = 1; x < siz_colums; x++)
		{
			printf(" %c. %s\n", pilihan[x-1], questions[y][x]);
		}
		printf("Your Answer: ");
		scanf("%c", &user_input);
		clear();
		user_input = toupper(user_input); //mengubah ke huruf besar

		int isTrue = 1;
		switch(user_input)
		{
			case 'A':
				user_input_convert = 0;
				BENAR = BENAR + 1;
				isTrue = 0;
				break;
			case 'B':
				user_input_convert = 1;
				SALAH = SALAH + 1;
				isTrue = 0;
				break;
			case 'C':
				user_input_convert = 2;
				SALAH = SALAH + 1;
				isTrue = 0;
				break;
			default:
				printf("Input mu tidak valid!");
		}
		printf("\n\n");
		//clear();
		if(isTrue == 0) { break; }
		}while(true);
	}
	if(SALAH == 0)
	{
		printf("JENIUS!!\n");
	}
	else if(BENAR < SALAH)
	{
		printf("Bodoh!\n");
	}
	else if(BENAR > SALAH)
	{
		printf("Okelah!\n");
	}
	printf("BENAR: %d\n", BENAR);
	printf("SALAH: %d\n", SALAH);
	return 0;
}

void clear()
{
	int c;
	while((c = getchar()) != '\n' && c != EOF);
}
