; Di pembelanjaran kali ini, kita akan mempelajari floating point. Floating point merupakan cara komputer merepresentasikan bilangan bulat seperti 3.14, 5.9, dalam biner.
; Floating-point alias bilangan bulat, memiliki struktur yang berbeda dengan bilangan bulat. Untuk mengolahnya kita memerlukan mnemonik khusus untuk melakukannya
; Seperti movss, addss, subss, imulss, mulss, dan lainnya. Mereka merupakan mnemonik khusus itu untuk mengola floating-point
; Mereka juga tidak bekerja dengan register 32-bit seperti eax, ebx, ecx, dan lainnya. Mnemonik tersebut berkerja dengan xmm. Untuk penjelasan lebih lanjut baca Assembly.odt

section .data
	fp1 dd 3.14
	fp2 dd 10.9

section .text
global _start

_start:
	;movss xmm0, [fp1]				; 3.14
	;movss xmm1, [fp2]				; 10.9
	;addss xmm0, xmm1				; Hasil dari atas = 14.04
	; xmm0 dan xmm1 merupakan register khusus yang berukuran 32-bit untuk menampung data floating-point. Tidak hanya untuk floating-point, xmm0-xmm15 juga dapat digunakan menampung data lainnya seperti bilangan bulat, string dan lain-lain
	; xmm0-xmm15 digunakan untuk bekerja secara pararel. Maksudnya, ekseksui banyak hal dalam satu waktu dan bersamaan tanpa menggangu yang lain
	; Mungkin, aku tidak dapat menjelaskan banyak mengenai floating-point. Seperti kenapa hasilnya tidak akurat dan lainnya.
	; Sekali lagi ku peringati, ketika melakukan operasi aritmatika pada bilangan floating-point harus menggunakan mnemonik operasi artimatika yang terdapat double ss didepannya seperti movss, addss, subss, imulss dan lainnya

	; Comparing floating-point
	; Sekarang, kita akan mempelajari bagaimana membandingkan floating-point. Untuk membandingkannya tidak dapat menggunakan cmp, karena kalian tahu sendiri format floating-point atau bilangan bulat memiliki format yang berbeda dengan bulat value.
	; Makanya dengan itu kita akan menggunakan mnemonik khusus yaitu UCOMISS (Unordered Compare Scalar Single Precision Floating-Point Values and Set EFLAGS). Buset apa tu. 
	; Intinya mnemonik ini untuk membandingkan 2 floating-point 32-bit dengan register xmm.
	; Hasilnya juga melakukan pengurangan dan disimpan di eflags, mirip aja seperti cmp.

	movss xmm0, [fp1]				; 3.14
	movss xmm1, [fp2]				; 10.9
	ucomiss xmm0, xmm1			; Akan melakukan pengurangan 3.14 - 10.9
										; 10.9
										;	3.14
										;------ -
										;  7.84 =switch= -7.84
										; Hasilnya adalah -7.84
	ja _start						; Menggunakan jb (jump-if-below), alasannya karena ucomiss bekerja dengan carry flag saja, maka jmp yang cocok adalah jmp juga yang bekerja dengan carry flag

	; Exit program
	mov eax, 1
	int 0x80
