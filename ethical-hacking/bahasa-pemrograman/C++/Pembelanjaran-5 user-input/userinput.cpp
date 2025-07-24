// << (insertion operator)  --> digunakan untuk memasukkan data byte ke dalam aliran (stream)
// >> (extraction operator) --> digunakan untuk mengambil data byte dari dalam aliran (stream)

#include<iostream>

using std::string, std::cout, std::cin;	// Biar lebih singkat saja
using usia_t = short;

int main(void)
{
	string username;
	string hobi;
	usia_t usia;

	cout << "Enter you username: ";
	//cin >> username;
	// Ini seperti scanf(), mengabaikan white space. Jadi ketika mengetik "diandra istaz", maka yang diambil hanya "diandra" dan sisanya di buffer
	// Untuk itulah mari gunakan function dalam std namespace yaitu getline(). Func ini akan membaca input string hingga menemukan newline, mirip seperti fgets
	std::getline(cin, username);
	cout << "i think, your username is " << username << '\n';
	
	cout << "Berapa umur-mu: ";
	cin >> usia;
	if(usia < 14) cout << "Berusia " << usia << ", Kau masih cukup muda nak" << '\n';
	else if(usia > 18) cout << "Berusia " << usia << ", Kau telah dewasa" << '\n';
	else cout << "Berusia " << usia << ", Kau sedang berada di masa remaja" << '\n';
	
	cout << "Apa hobimu: ";
	// Karena cin meninggalkan buffer ketika terdapat newline atau whitespace, maka yang terjadi std::getline() akan menggunakan yang berada di buffer tersebut
	// Untuk mengatasi hal itu, kita gunakan std::ws. Ini berfungsi untuk mengabaikan whitespace baik newline, tab, dan space
	std::getline(cin >> std::ws, hobi);
	// Input akan masuk kedalam std::ws dan diproses menghilangkan whitespace, lalu setelah itu diteruskan ke function
	cout << "Hobimu adalah " << hobi << '\n';
	return 0;
}
