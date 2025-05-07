// function merupakan fungsi yang dapat dipanggil berkali-kali untuk melakukan tugas tertentu, dengan adanya function
// ini program akan menjadi lebih muda dibaca dan fleksibel.

#include <stdio.h>

void birthday() { //membuat sebuah function dengan menampilkan output ucapan selamat ulang tahun
	printf("Happy Birthday Diandra!\n");
}

int main() {
	birthday(); //memanggil function yang telah dibuat tersebut
	return 0;
}

/*Dengan function kita dapat melakukan sesuatu berulang kembali, melakukan tugas yang sama di sisi program
 * lain dengan lebih mudah dengan hanya satu fungsi.*/
