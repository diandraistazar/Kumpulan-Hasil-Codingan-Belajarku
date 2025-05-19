/*Struct (structure) = merupakan tipe data yang mengelompokkan beberapa variabel
 * 						yang memiliki tipe data yang berbeda menjadi satu variabel.*/

/*sintaks struct = struct <nama> {<variabel-variabel>}
 * 					untuk mengakses: <nama>.<variabel> = <nilai>;*/
// tanda '.' (titik) disini maksudnya "member access operator" atau "member akses anggota"
// yang digunakan untuk mengakses nilai variabel dari struct

#include <stdio.h> 
#include <string.h>

struct Person {
	char nama[10];
	char kelas[4];
	int label;
};

int main() {
	//untuk siswa1
	struct Person siswa1; //deklerasikan struct Person dengan nama siswa1
	strcpy(siswa1.nama, "Mita");
	strcpy(siswa1.kelas, "XII");
	siswa1.label = 5; /*Menginsialisasi satu persatu variabel yang berada didalamnnya*/

	struct Person siswa2 = {"Diandra", "X", 5}; /*kamu juga dapat langsung menginsilisasi nilainya seperti ini
												dengan sesuai urutan, jika tidak maka nilai tidak dapat diinsilisasi
												dengan benar.*/
	printf("Nama: %s\nKelas: %s-%d\n", siswa1.nama, siswa1.kelas, siswa1.label);
	return 0;
}
