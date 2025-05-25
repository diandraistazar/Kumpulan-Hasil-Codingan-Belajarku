/*quiz2 merupakan program yang sama dengan quiz, mereka sama-sama program quiz :v.
 cuman kali ini quiz2 adalah bentuk lebih baik dari quiz, yang mana pilihannya dapat acak! 
tidak seperti sebelumnnya yang hanya pilihan A.*/

#include <stdio.h>
#include <ctype.h>

//Function Prototypes
int checking_input(char[], char, int);
void congrats(int, int);

char opts[] = { 'A', 'B', 'C' }; //simbol opsi pilihan
int sz_opts = sizeof(opts)/sizeof(opts[0]);

char *questions[][5] = { //pertanyaan dan jawaban
//	*Questions									*Correct Answers
	{"Siapa pendahulu C?",						"A",
	"B",
	"C++",
	"Assembly"
	},
	{"Apa lanjutan dari \"I use ____\"?",		"B",
	"Ubuntu",
	"Arch",
	"Windows"
	},
	{"Apa itu RICE?",							"C",
	"Memasak Nasi",
	"Menampilkan setup kejelekan linux",
	"Menampilkan setup kebagusan linux"
	},
	{"Are you care about school?",				"B",
	"Yes, Of course",
	"Actually No",
	"Sometimes NO, Sometimes YES"
	},
	{"Are you gay?",							"A",
	"Yes, I am gay",
	"No, I am gay",
	"Maybe, I am gay"
	}
};

int sz_rows = sizeof(questions)/sizeof(questions[0]); //panjang baris
int sz_colums = sizeof(questions[0])/sizeof(questions[0][0]); //panjang kolom


int main()
{
	printf("Note: cara bermainnya hanya perlu menjawab jawaban yang benar dengan menggunakan huruf A, B, atau C. Skor akan ditampilkan di akhir setelah quiz selesai\n\n");
	int BENAR = 0;
	int SALAH = 0;
	char user;

	for(int index = 0; index < sz_rows; index++)
	{
		while (true)
		{
		printf("%d. %s\n",index+1 ,questions[index][0]);
		for(int opt = 2; opt < sz_colums; opt++)
		{
			printf("%c. %s\n", opts[opt-2], questions[index][opt]);
		}
		
		/*User input*/
		printf("Your answer: ");
		scanf(" %c", &user);
		user = toupper(user);

		/*Checking apakah input sesuai*/
		int isRight = checking_input(opts, user, sz_opts);
		if(isRight != 1) //jika hasilnya benar maka lanjutkan, jika salah skip
		{
			printf("\nTolong masukkan opsi yang valid!\n\n");
			continue;
		}

		/*Logika*/
		if(user == *questions[index][1]) //ketika kondisinya benar!
		{
			BENAR = BENAR + 1;
		}
		else //ketika kondisinya salah!
		{
			SALAH = SALAH + 1;
		}

		printf("\n");
		break;
		}
	}

	printf("##############################\n");
	congrats(BENAR,SALAH);
	printf("Skor: %d/%d\n", BENAR, sz_rows);
	//printf("BENAR: %d\n", BENAR);
	//printf("SALAH: %d\n", SALAH);
	return 0;
}

int checking_input(char opts[], char input, int size)
{
	int final = 0;
	for(int x = 0; x < size; x++)
	{
		if(input == opts[x]) { final = final + 1; }
	}

	/*Logika*/
	if(final == 1) { return 1; }
	return 0;
}

void congrats(int BENAR, int SALAH)
{
	if(SALAH == 0) { //kondisi jika jumlah salah 0
		printf("JENIUS!\n");
	}
	else if(BENAR == SALAH) { //kondisi jika BENAR sama dengan SALAH
		printf("SEIMBANG!\n");
	}
	else if(BENAR > SALAH) { //kondisi jika BENAR lebih besar dari SALAH
		printf("Okelah!\n");
	}
	else if(BENAR < SALAH) { //kondisi jika BENAR lebih kecil dari SALAH
		printf("BODOH!\n");
	}
}
