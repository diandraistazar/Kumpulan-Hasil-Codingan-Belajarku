#include<iostream>

int main(void)
{
	/* ForEach loop merupakan cara looping dengan menggunakan element pada array
		Alih-alih mengakses semua element array menggunakan index, di C++ terdapat fitur foreach loop
		Daripada bingung mari demonstrasikan
	*/
	std::string myWaifus[] = {"Mita", "Cappie", "Marie"};
	
	/* Cara tradisional di C
	for(int x = 0; x < sizeof(myWaifus)/sizeof(myWaifus[0]); x++)
	{
		std::cout << myWaifus[x] << '\n';
	}
	*/
	// Lebih cepat dan readable juga kan.
	// Ini artinya std::string waifu itu variabel yang akan menyimpan element dari myWaifus
	// : myWaifus kalau seperti in myWaifus
	for(std::string waifu : myWaifus)
	{
		std::cout << waifu << '\n';
	}
	return 0;
}
