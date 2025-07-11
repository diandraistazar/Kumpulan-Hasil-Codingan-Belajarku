; Sekarang kita akan mempelajari mengenai shift. Kalau kalian pernah belajar bitwise operation di C, mungkin shift tidak terdengar asing di telinga mu.
; Shift digunakan untuk memindahkan bit ke kanan > atau ke kiri <. Di C bisanya menggunakan >> dan <<
; Mnemonik yang digunakan adalah shr dan shl, untuk penjelasan lebih lanjut bisa baca Assembly.odt
; Terdapat rumus yang diguanakn untuk menghitung shift left dan right
; Shift Left:  a * 2^b
; Shift Right: a / 2^b
; Jadi, kita tidak perlu tobiner->shift->desimal lagi

section .text
global _start

_start:
	mov ax, 22
	shl ax, 4
	; 22 * 2^4
	; 22 * 16
	; 352
	; Maka 22 dalam biner digeser ke kiri sebanyak 4 kali akan menghasilkan angka 352

	mov ax, 10
	shr ax, 3
	; 10 / 2^3
	; 10 / 8
	; 1 
	; Maka 10 dalam biner digeser ke kanan sebanyak 3 kali akan menghasilkan angka 1

	int 80h
