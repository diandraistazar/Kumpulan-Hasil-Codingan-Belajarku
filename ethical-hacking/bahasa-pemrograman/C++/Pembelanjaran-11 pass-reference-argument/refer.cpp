#include<iostream>

void isiVariabelOld(int *var, int value);
void isiVariabelNew(int &var, int value);

int main(void){
	/* Kali ini simpel aja, kali ini akan mempelajari paramter function refrence. Biasanya saat
	 * Pass argument berupa alamat memori kepada function, parameter pada function pastinya harus bertipe 
	 * pointer seperti "char *arg". Nah di C++, terdapat fitur yang namanya paramter refrence. Yang mana
	 * tidak perlu membuat variabel pointer untuk menampung memory address tersebut, dan langsung digunakan seperti seolah-olah variabel lokal saat itu*/
	
	// Variabel kosong, akan diisi oleh function isiVariabel
	int x;
	
	// Function ini akan mengisi alamat memori variabel di arg1 dengan nilai dari arg2
	isiVariabelOld(&x, 10);		// WAJIB operator "&", untuk di berikan ke function lalu dimanipulasi
	isiVariabelNew(x, 20);		// Tanpa operator "&", sudah dapat memanipulasi nilai melalui function
	return 0;
}

void isiVariabelOld(int *var, int value){
	// Kudu deferencing (akses alamat memori) lalu mengisi valuenya
	// Jika ingin akses valuenya dari alamat memori yang disimpan oleh variabel pointer, maka gunakan operator *
	*var = value;
	std::cout << "(old) Akses biasa: " << var << '\n';
}

void isiVariabelNew(int &var, int value){
	// dengan "int &var", kita dapat mengakses isi variabelnya seperti variabel lokal, tanpa perlu melakukan deferencing
	// Bahkan kita tidak perlu menggunakan operator "&", cukup pass nama variabelnya
	var = value;
	std::cout << "(new) Akses biasa: " << var << '\n';
}
