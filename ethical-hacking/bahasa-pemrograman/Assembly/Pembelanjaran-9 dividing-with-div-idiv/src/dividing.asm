; Pembelanjaran kali ini, kita akan mempelajari mnemonik lagi yaitu div dan idiv. Kedua mnemonik ini digunakan untuk melakukan operasi artimatika terutama "membagi"
; Terdapat dua div dan idiv. Seperti imul dan mul, div dan idiv itu digunakan untuk membagi bilangan unsigned dan signed.
; Unsigned berarti bilangan bulat / desimal positif saja, sementara signed berarti bilangan desimal positif dan negatif
; div dan idiv juga hanya memerlukan satu operan saja, yang mana merupakan operan yang akan dikalikan dengan bilangan yang berada pada accumulator seperti eax, ax, ah, dan al

section .text
global _start

_start:
	;mov al, 10
	;mov bl, 2
	;div bl
	; Menurutmu hasilnya berapa? Ya benar, hasilnya 5 dari operasi div diatas.
	; Bagaimana sekarang kalau 11 / 2?

	;mov ax, 11
	;mov bl, 2
	;div bl 
	; Hasilnya akan menghasilkan 5, dan sisanya 1 akan disimpan di register data yakni edx, dx, dh, atau dl
	
	mov ax, -11
	mov bx, 2
	idiv bx
	; Sama fungsinya dengan div, hanya dapat membagi bilangan positif dan negatif juga, dan sisanya akan distore di register data

	int 80h
