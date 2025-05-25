/* Ini merupakan program game tic tac toe atau dalam bahasa indonesia
 * Silang bulat silang. Program tic tac toe merupakan program terakhir
 * yang akan kubuat, karena jika aku berhasil membuat program ini
 * aku akan dinyatakaan LULUS.*/

/* Karena ini merupakan program latihan, pastinya memiliki kekurangan. Program ini hanya progam kecil
 * Untuk melatih logika pemrogramman-ku serta agar mempelajari C language lebih paham. :3 */

#include <stdio.h>
#include <time.h>
#include <stdlib.h>

// Function prototypes
void printBoard();
void resetBoard();
void playerPlay();
void computerPlay();
int checking();

// Input computer dan player
unsigned int y;
unsigned int x;

const char Player = '+'; // Player character
const char Computer = '-'; // Computer character
const char *Massage[] = { /* Costum Massage yang akan ditampilkan */
	"Kamu MENANG!\n", // Pesan untuk player menang 
	"Kamu KALAH\n", // Pesan untuk player kalah
	"Kalian SERI!\n", // Pesan untuk kalian seri
	"y and x (1-3): ", // String output minta input
	"Angka-mu kebesaran!\n", // Pesan ketika input kebesaran
	"Telah ditempati!\n" // Kolom ketika ditempati
};

char Board[3][3]; // Posisi (3x3)
unsigned int jumlah = sizeof(Board)/sizeof(Board[0]) * sizeof(Board[0])/sizeof(Board[0][0]); // jumlah kolom tersisa
int returnFromChecking;

int main() // logika program semuanya disini
{
	resetBoard(); // mengubah semua kolom menjadi ' '
	do
	{	
		returnFromChecking = checking(); // Mengecek bagaimana kondisi di Board
		if(-1 != returnFromChecking)
		{
			printf("\n");
			printBoard();
			if(returnFromChecking == 0) // Player menang
			{
				printf(Massage[0]);
			}
			else if(returnFromChecking == 1) // Komputer menang
			{
				printf(Massage[1]);
			}
			else if(returnFromChecking == 2) // Seri
			{
				printf(Massage[2]);
			}
			break;
		}
		printf("\nJumlah: %d\n", jumlah); // Menampilkan jumlah kolom
		printBoard(); // mem-print Board
		playerPlay(); // giliran player
		computerPlay(); // giliran computer
	} while(true);
	return 0;
} 

void printBoard()
{
	// Menampilkan Board, maaf jika kekecilan
	
	printf(" %c | %c | %c \n", Board[0][0], Board[0][1], Board[0][2]);
	printf("---|---|---\n");
	printf(" %c | %c | %c \n", Board[1][0], Board[1][1], Board[1][2]);
	printf("---|---|---\n");
	printf(" %c | %c | %c \n", Board[2][0], Board[2][1], Board[2][2]);
}

void resetBoard()
{
	for(int y1 = 0; y1 < 3; y1++)
	{
		for(int x1 = 0; x1 < 3; x1++)
		{
			Board[y1][x1] = ' ';
		}
	}
	returnFromChecking = -1;
	y = -1;
	x = -1;
}

void computerPlay()
{
	int condition = 1;

	if(jumlah == 0){ condition = 0; } // jika sudah tidak ada tempat lagi
	srand(time(0));
	while(condition)
	{
		y = rand() % 3; // input computer (Y)
		x = rand() % 3; // input computer (X)
		if(Board[y][x] == ' ')
		{
			Board[y][x] = Computer;
			jumlah--;
			break;
		}
	}
}

void playerPlay()
{
	do
	{
		printf(Massage[3]);
		scanf("%d%d", &y, &x);
		y--; x--; // dikurangi 1 agar menjadi indeks
	
		if(y > 3 || x > 3) // mengecek apakah angka lebih dari batas
		{
			printf(Massage[4]);
			continue;
		}

		if(Board[y][x] == ' ')
		{
			Board[y][x] = Player;
			jumlah--;
			break;
		}
		printf(Massage[5]); // dijalankan ketika tidak ada kondisi yang benar
	} while(true);
}

int checking()
{
	// maksud return angka di fungsi ini
	// 0 = Player menang
	// 1 = Computer menang
	// 2 = Seri
	// -1 = tidak ada

	char Chara[2] = {Player, Computer}; // Menyimpan karakter pemain dan komputer
	
	
	for(int character = 0; character < 2; character++)
	{
		for(int x = 0; x < 3; x++)
		{
			if(Board[0][x] == Board[2][x] && Board[0][x] == Board[1][x] && Board[0][x] == Chara[character]) // Periksa secara Vertical
			{
				return (Board[0][x] == Chara[0]) ? 0 : 1;
			}
			if(Board[x][0] == Board[x][2] && Board[x][0] == Board[x][1] && Board[x][0] == Chara[character]) // Periksa secara Horizontal
			{
				return (Board[x][0] == Chara[0]) ? 0 : 1;
			}
			if(Board[0][0] == Board[2][2] && Board[0][0] == Board[1][1] && Board[0][0] == Chara[character]) // Periksa dari silang kiri
			{
				return (Board[0][x] == Chara[0]) ? 0 : 1;
			}
			if(Board[2][0] == Board[0][2] && Board[2][0] == Board[1][1] && Board[2][0] == Chara[character]) // Periksa dari silang kanan
			{
				return (Board[0][x+2] == Chara[0]) ? 0 : 1;
			}
			
		}
	}
	if(jumlah == 0) // Hasil Seri!
	{ 
		return 2;
	}

	return -1; // Hasil Tidak ada
}
