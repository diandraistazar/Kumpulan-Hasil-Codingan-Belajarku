; Sebelumnnya, kita mempelajari bagaimana push data ke stack dan diproses oleh function. 
; Sekarang, kita akan mempelajari bagaimana membuka dan membaca files.
; Di C, untuk membuka dan membacanya bisa menggunakan function fopen(<file>, "r").
; Kalau di assembly atau machine code. Kita tidak akan menggunakan function itu di pembelanjaran kali ini.
; Melainkan memanfaatkan syscall_open dan syscall_read.

section .data
	pathname db "/home/diandra/Documents/Coding/Kumpulan-Hasil-Codingan-Belajarku/ethical-hacking/bahasa-pemrograman/Assembly/Pembelanjaran-18 opening-and-reading-files/src/tes.txt", 0

section .bss
	buffer resb 10

section .text
global _start

_start:
	mov eax, 0x05			; syscall_open
	mov ebx, pathname		; address of pathname
	mov ecx, 0b1			; O_RDONLY
	int 0x80

	mov esi, eax			; store the file descriptor from eax to esi

	;mov eax, 0x13			; syscall_lseek
	;mov ebx, esi			; file descriptor
	;mov ecx, 0				; offset
	;mov edx, 0				; whence - SEEK_SET
	;int 0x80

	mov eax, 0x03			; syscall_read
	mov ebx, esi			; file descriptor
	mov ecx, buffer		; buffer stored
	mov edx, 10				; count
	int 0x80

	mov eax, 1				; syscall_exit
	int 0x80
