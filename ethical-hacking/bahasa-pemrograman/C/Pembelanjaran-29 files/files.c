#include <stdio.h>
#include <string.h>

/* FILE = merupakan tipe data yand didefinisikan dalam header stdio.h. FILE memungkin kita
 * 			untuk berinteraksi dengan file yang ada disistem. Seperti membaca, menulis, dan 
 * 			mengedit.*/

/* fopen() = berfungsi untuk membuka file atau membuat file baru (jika belum ada)
 * 			Sintaks = fopen("<filename>","<mode>")
 * 			mode :
 * 				r = read
 * 				w = write, jika tidak ada (file) maka otomatis akan dibuatkan, tetapi jika telah ada maka akan di buka
 * 				a = append 
 * 				rb = read in biner
 * 				wb = write in biner
 * 				ab = appen in biner
 * 				r+ = read and write
 * 				w+ = read and write, jika file telah ada akan di overwrite, tetapi jika tidak ada akan di tambahkan 
 * 				a+ = read and append, sama seperti w+ sisanya
 * 				rb+ = read and write in biner
 * 				wb+ = write and write in biner
 * 				ab+ = read and append in biner
 * 				x = create new one (file), gagal jika telah ada
 * 				x+ = create new one to read and write, gagal jika telah ada*/

/* fprintf() = berfungsi untuk menulis data dari output ke file atau berbagai tempat
 * 			Sintaks = fprintf(<pointerfile>,"<string>",<optional-variabel>);*/

/* remove() = berfungsi untuk menghapus file 
 * 			Sintaks = remove(<file>) */

int main()
{
	char file[] = "sapa.txt"; // membuat nama file
	FILE *pF = fopen(file,"w+"); // read file sapa.txt
	char value[30];
	if(pF == NULL)
	{
		printf("File %s tidak ditemukan\n", file);
	}
	else
	{
		fgets(value, sizeof(value), pF);
		value[strlen(value)-1] = '\0'; // menghilangkan newline
		printf("File %s ditemukan!\n", file);
		printf("Isi file: \"%s\"\n", value);
		//remove(file);
		//printf("Sukses mendelete file %s\n", file);
		fclose(pF);

	}
	return 0;
}
