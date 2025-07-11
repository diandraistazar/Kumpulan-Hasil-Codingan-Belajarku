; Kali ini kita akan mempelajari mengenai operator logika atau logical operators
; Kalau kalian udah pernah belajar bahasa pemrogramman sebelumnnya, pasti kalian tahu apa itu logical operator
; Logika operator merupakan operator yang digunakan untuk membandingkan 2 kondisi atau lebih
; Operasi logika sayangnya bukan dalam level seperti membandingkan hasil, melainkan di level biner alias bitwise operation
; Di assembly, kita menggunakan mnemonik and, or, xor, ...

section .text
global _start

_start:
	mov ax, 0b0001010
	mov bx, 0b0001111
	and ax, bx
	; Menurutmu apa hasilnya? Hasilnya adalah 10!. Kok bisa?
	; Gini-Gini
	; 0001010
	; 0001111
	; ------- &
	; 0001010 = 10

	mov ax, 0b00101000
	mov bx, 0b00010100
	or ax, bx
	; Menurutmu apa hasilnya? hasilnya adalah 60!. Kok bisa?
	; Gini-gini
	; 00101000
	; 00010100
	; -------- |
	; 00111100 = 60

	mov al, 0b00001010
	not al
	; Menurutmu apa hasilnya? hasilnya adalah 245!
	; Gini-gini
	; 00001010
	; -------- !
	; 11110101 = 245 (unsigned)
	; 11110101 = -11 (signed)
	; Ketika di debugger menggunakan dbg, entah kenapa hasilnya malah -11?, sebenranya dalam bit nya memang benar, hanya saja gdb menampilkannya dalma format signed, jadi hasilnya -11, nah kita ganti aja cara nampilinnya dengan usigned maka hasilnya 245

	mov al, 0b01000110
	mov bl, 0b00011110
	xor al, bl
	; Menurutmu apa hasilnya? hasilnya adalah 88!.
	; Gini-gini
	; 01000110
	; 00011110
	; -------- ^
	; 01011000 == 88

	; exit
	int 80h
