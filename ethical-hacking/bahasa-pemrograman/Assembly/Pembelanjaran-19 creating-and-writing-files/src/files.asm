; Kali ini, kita akan mempelajari cara membuat file dan menulis file kedalamnnya. 
; syscall yang akan digunakna adalah syscall_open untuk membuka file dan syscall_write untuk menulis ke dalamnnya

section .text
global _start

_start:
	; Create file
	mov eax, 0x05			; syscall_open
	mov ebx, path_name	; path the file
	mov ecx, 101o			; O_WRONLY + O_CREATE
	mov edx,	600o			; 0400 (READ) + 0200 (WRITE) = 0600 == r+w+- Permission file
	int 0x80					; Mungkin kalian berpikir, memang bisa buka file kalau filenya nggak ada.
								; Apa yang kalian pikirkan memang benar, bahwa disini aku menggunakna syscall_open yang secara logika untuk membuka file
								; Namun, di flags terdapat flag yang memungkinkan kita membuat file ketika file tersebut belum ada sebelumnnya yaitu O_CREAT.
								; Flag ini akan menyuruh sistem operasi membuat file ketika file yang ingin dibuka tidak ada, setelah dibuat baru sistem operasi membuka filenya dan mendapatkan file deskriptornya
								; Tanpa flag ini, membuka file akan gagal

								; Bilagan 101o itu maksudnya adalah bilangan oktal. flag yang kita gunakan itu menggunakan bilangan oktal, dan untuk mengambungkan flag digunakan perhitungan OR disini. Begitu juga bilangan 600o

	mov esi, eax			; store the file descriptor to esi
	
	; Write into the file
	mov eax, 0x04			; syscall_write
	mov ebx, esi			; file descriptor
	mov ecx, massage		; path the buffer
	mov edx, 13				; length of massage
	int 0x80					; Kemudian, kita akan menulis teks kedalam file deskriptor tersebut dari massage yang berisi "Hello Mita!"

	; Close file
	mov eax, 0x06			; syscall_close
	mov ebx, esi			; file descriptor
	int 0x80					; Setelah selesai urusannya dengan file, jangan lupa untuk menutup file deskriptornya, agar tidak buang-buang sumber daya dan memastikan teks tertulis kedalam file

	; exit
	mov eax, 1
	int 0x80					; seperti biasa, program selesai jalan harus ditutup

section .data
	path_name db "/home/diandra/Documents/Coding/Kumpulan-Hasil-Codingan-Belajarku/ethical-hacking/bahasa-pemrograman/Assembly/Pembelanjaran-19 creating-and-writing-files/src/massage-for-you.txt", 0
	massage db "Hello Mita!", 10, 0
