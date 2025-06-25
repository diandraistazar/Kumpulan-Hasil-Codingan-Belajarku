section .text
global _start

_start:
	; Sekarang, kita akan bekerja dengan mnemonik perkalian yaitu MUL dan IMUL
	; Perbedaan antara kedua tersebut hanya terletak pada nilai apa yang mereka kerjakan, 
	; MUL digunakan untuk unsigned integer, artinya hanya bekerja dengan nilai integer positif no negatif
	; Sementara IMUL, bekerja dengan unsigned int dan int, sehingga IMUL lebih fleksibel digunakana dibandingkan mul

	mov al, 0xff
	mov bl, 2
	mul bl
	; dengan begini proccesor akan mengambil angka dari accumulator dalam hal ini al dan mengalikannya dengan nilai pada register bl
