section .data
	num1 db 1				; 1 byte
	num2 db 3				; 1 byte

section .text
global _start

_start:
	mov al, 1				; syscall_exit
	mov bl, [num1]			; return 1
	mov cl, [num2]			; tambahan 2
	int 80h

; Sekilas dari code assembly ini tidak ada yang salah kan, cuman ketika kita mengirim nilai num1 dan num2 ke ebx dan ecx
; CPU akan mengambil sesuai jumlah register. Gini kan ebx dan ecx itu 32-bit == 4 byte. Maka CPU akan mengambil 4 byte dari alamat memori num1 dan num2, padahal num1 dan num2 hanya dialokasikan 1 byte
; Dengan begitu, CPU akan mengambil alamat memori disebelahnya juga, kebetulan disebelahnya dari num1 terdapat num2 maka num2 keikut di ambil oleh CPU, sehingga ketika di debugging ebx isinya 201 gabungan 4 byte dari alamat memori num1
; Untuk mengatasi hal tersebut, kita gunakan register sesuai ukuran data yang akan digunakan, karena num1 dan num2 hanya 1 byte maka disini aku menggunakan bl dan cl yang memiliki ukuran 7-0 bit == 1 byte
