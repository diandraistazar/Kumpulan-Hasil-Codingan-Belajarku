/* latihan kali ini memang sudah pernah dilakukan di pembelanjaran C, tetapi saya akan mengulanginya lagi
 * Menggunakan C++, dengan beberapa function dari C++
*/
#include<iostream>
#include<iomanip>
#include<unistd.h>

namespace data_quiz {
	// questions
	std::string questions[][5] = {
		{"Berapa usia diandra sekarang?",
		"18",
		"15",
		"16",
		"12"},

		{"Berapa lama diandra telah belajar pemrogramman?",
		"12 Bulan",
		"7 Bulan",
		"2 Bulan",
		"4 Bulan"},

		{"Apa lagu favorit diandra sekarang?",
		"Get Your Wish",
		"Quaver",
		"non-oblige",
		"Look at the sky"},

		{"Kelas berapa diandra sekarang?",
		"Kelas 9",
		"Kelas 12",
		"Kelas 11",
		"Kelas 10"},
	};
	// Size of questions array
	int size = sizeof(questions)/sizeof(questions[0]),
		 size_ans = sizeof(questions[0])/sizeof(questions[0][0]) - 1;

	// Answers
	std::string *answers[] = {
		&questions[0][3],	 // c - 16
		&questions[1][2],  // b - 7 Bulan
		&questions[2][1],  // a - Get Your Wish
		&questions[3][3],  // c - Kelas 11 
	};
	
	// Symbol pilihan ganda
	std::string selecSym[] = {"a", "b", "c", "d"};

	// Score
	int correct = 0, wrong = 0, score, nilai_kkm = 70;

	// User input
	std::string usr_input;
}

// Main function
int main(void)
{
	bool iWantContinue;
	for(int x = 0; x < data_quiz::size; x++)
	{
		while(true)
		{
			// Print Question
			iWantContinue = 0;
			std::cout << '\n' << x+1 << ". " << data_quiz::questions[x][0] << " ...\n";
			for(int j = 0; j < data_quiz::size_ans; j++)
				std::cout << data_quiz::selecSym[j] << ". " << data_quiz::questions[x][j+1] << '\n';

			// Get user input
			std::cout << "Your answer: ";
			std::getline(std::cin, data_quiz::usr_input);

			if(!data_quiz::usr_input.empty())
			{
				// Checking the input as charachter
				for(int j = 0; j < data_quiz::size_ans; j++)
				{
					if(data_quiz::selecSym[j] == data_quiz::usr_input)
					{
						if(data_quiz::questions[x][j+1] == *data_quiz::answers[x])
							data_quiz::correct += 1;
						else
							data_quiz::wrong += 1;
						iWantContinue = 1;
						break;
					}
				}

				if(iWantContinue) break;
				
				// Checking the input as string
				if(*data_quiz::answers[x] == data_quiz::usr_input)
				{
					data_quiz::correct += 1;
					break;
				}
				else
				{
					data_quiz::wrong += 1;
					break;
				}
			}
			else
				std::cout << "Please, enter an input!\n";
		}
	}

	// Print result
	data_quiz::score = ((float)data_quiz::correct / (float)data_quiz::size) * 100.0;
	
	std::cout << "\n####################\n";
	std::cout << (data_quiz::score > data_quiz::nilai_kkm ? "Selamat, kamu lolos dari ujian!\n" : "Sayangnya, kamu tidak lolos dari ujian\n");
	std::cout << "Correct = " << data_quiz::correct << '\n';
	std::cout << "Wrong   = " << data_quiz::wrong << '\n';
	std::cout << "===========\n";
	std::cout << "Score   = " << data_quiz::score << '\n';
	sleep(1);
	return 0;
}
