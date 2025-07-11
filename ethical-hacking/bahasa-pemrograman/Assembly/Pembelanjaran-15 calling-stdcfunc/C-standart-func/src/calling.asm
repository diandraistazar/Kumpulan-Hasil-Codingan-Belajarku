; Kali ini kita akan mempelajari hal yang lebih seru, yaitu bagaimana memanggil C function di assembly :3. 
; Kalau pernah belajar C sebelumnnya, C standard function ada banyak seperti printf, scanf, dan lainnya. Nah kita akan memanggilnya di assembly sekarang 

extern printf
extern scanf
extern fflush
extern stdout

section .rodata
	intro db "Your name: ", 0
	final db "I guess your name is %s", 10, 0
	text1 db "%s", 0

section .bss
	input resb 19

section .text
global main

main:
	; Print
	; Pertama-tama akan print "Your name: ", merupakan tanda kepada user untuk memasukkan namanya 
	push intro							; push intro isinya "Your name: " stack
	call printf							; panggil printf func. Ingat! stack menggunakna prinsip LIFO (Last In First Out) yang mana memory address paling atas itu akan dimasukkan sebagai argument pertama pada function
	
	; Flush 
	push dword [stdout]				; push stdout file descriptor dengan ukuran 2 byte
	call fflush							; panggil fflush func agar output segera ditampilkan tanpa menunggu newline \n

	; Takes input
	push input							; push alamat memory input yang dialokasikan tanpa di insialisasi untuk menyimpan user input
	push text1							; push format scanfnya, disini "%s" yang akan menerima string
	call scanf							; panggil scanf func untuk meminta input dari user
	
	; Print user input
	push input							; push alamat memori dimana user input berada
	push final							; push format printf
	call printf							; panggil printf func
	
	; Clear stack memory
	mov esp, 0							; Isi esp saat ini pastinya berisi alamat memori dari yang kita push sebelumnnya, lalu aku mengisi esp dengan angka 0 artinya isi dari esp akan menunjuk 0 atau NULL.
	; Pertanyaannya, apakah data dalam stack sebelumnnya telah hilang. Jawabannya tidak! aku hanya mengubah esp menunjuk ke NULL bukan melakukan penghapusan, yang artinya data masih ada di stack, cuman udah tidak dapat diakes lagi
	; Di C aku sepeti ptr = NULL, tanpa membersihkan terlebih dahulu alamat memori yang distack ini. 
	; Ini bukan merupakan praktek yang baik dengan membiarkan stack memori sebelumnnya berada di stack tanpa dilakukan penghapusan terlebih dahulu

	; exit
	mov eax, 1
	int 0x80
