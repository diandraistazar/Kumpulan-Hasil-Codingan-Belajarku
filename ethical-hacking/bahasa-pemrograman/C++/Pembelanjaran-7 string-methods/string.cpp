#include<iostream>

int main(void)
{
	/* disini kita akan membahas sedikit method string yang mungkin
		berguna untuk memanipulasi string
	*/
	
	/* =>Mendapatkan length() dari string
	std::string name;
	std::getline(std::cin, name);
	if(name.length() > 4)
		std::cout << "Nama-mu melebihi 4 karakter" << '\n';
	else
		std::cout << "Nama-mu adalah " << name << '\n';
	*/


	/* =>Mendapatkan nilai boolean (1 atau 0) apakah string isinya kosong atau tidak
	std::string name;
	std::getline(std::cin, name);

	if(name.empty())
		std::cout << "Kau bahkan tidak memasukkan namamu bro " << '(' << name.length() << ')' << '\n';
	else
		std::cout << "Selamat datang, " << name << '\n';
	*/

	/* =>Menghapus string (clear string)
	std::string name;
	std::getline(std::cin, name);

	name.clear();

	std::cout << "Hello, " << name << '\n';
	*/
	
	// Beberapa yang lain seperti name.append(<string>), seperti strcat menambahkan string ke string lain
	// name.at(<index>), untuk mengakses charachter string menggunakan index. Mirip seperti name[<index>] begitu
	// name.insert(<index>, <char>), untuk memasukkan string pada posisi tertentu menggunakan index. Misal index 0 dan "Saya", maka di Index 0 akan dimasukkan "Saya", dan string lainnya akan bergeser
	// name.find(<char>), mencari posisi karakter tertentu dalam string, akan mengembalikan index karakter yang ditemukan
	// name.erase(<start-index>, <end-index>), untuk menghapus bagian string tertentu dengan rentang yang dimasukkan, misal 1 dan 2 artinya index 1 - 2 akan dihapus
	// Untuk mengakses lebih banyak, kunjungi situs std::string function
	return 0;
}
