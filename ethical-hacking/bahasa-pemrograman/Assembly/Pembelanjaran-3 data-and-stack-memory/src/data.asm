; Di pembelanjaran kali ini, kita akan bekerja dengan data dan stack memory

section .data			; mendefiniskan section .data, yang mana kalian tahu ini merupakan section deklerasi variabel dengan nilainya dan bersifat konstan (Tidak dapat diubah)
	num db 6

section .text
	global _start:

_start:
	mov al, 1			; memanggil syscall_exit untuk mengehentikan program
	mov bl, [num]		; mengisi return program dari nilai yang telah di definisikan dari variabel num
	int 80h				; call kernel

; Namun, ketika program nya dijalankan lantas kenapa yang direturn 0 bukan angka 6?, maka kita akan lihat alur programnya melalui dubegger.
; Debugger yang kugunakan adalah gdb
; Nah, setelah di debug, ternyata isi dari ebx itu bukanlah angka 6 melainkan alamat memori dimana angka 6 tersimpan, jelas terjadi kesalahan
; Untuk memperbaikinya, kita hanya perlu menambahkan bracket left and right [] dan mengurung variabel num. Dengan [] itu artinya kita mengakses element dari alamat memori tertentu, dalam hal ini num
