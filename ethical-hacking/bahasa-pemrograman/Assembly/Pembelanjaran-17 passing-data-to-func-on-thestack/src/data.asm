; Kali ini kita akan mempelajari cara mengirim data ke func atau ke stack untuk diproses oleh func. Artinya kita akan mempelajari bagaimana data ketika diteruskan ke function dalam machine code.
; Kalau sebelumnnya, kita mempelajari cara menggunakan func langsung dari assembly tanpa melalui library C.
; Sekarang kita akan mempelajari bagaimana data diteruskan ke function

section .text
global _start

sumNum:
	mov ebp, esp		; Kita akan mengisi ebp (Extended Base Pointer) dengan esp  untuk mengakses data di stack
							; Kenapa tidak esp yang digunakan? esp itu pointer utama penunjuk data paling atas, dan digunakan untuk menghandle ketika terdapat mneonik push
							; ebp kita gunakan untuk mengakses data dalam stack
	mov eax, [ebp + 4]; Nah disini aku juga bingung, kenapa kita harus mengakses angka "10" dengan offset "4" dan angka "5" offset "8". 
							; Asumsi ku, karena angka atau int itu berukuran 4 byte == 32 bit. Di C tipe data int itu berukuran 4 == byte atau 32-bit.
							; 1 block memory == 8 bit. Maka angka atau int menyewa block memory sebanyak 4 block, dan itulah mengapa kita mengakses angka dengan kelipatan 4 yang mana merupakan tipe data integer
							; Cuman, disini alamat instruksi pengembalian juga berukuran 4 byte.
							; Setelah mencari-cari, akhrinya aku menemukan jawabannya.
							; Kenapa alamat memori pengembalian berukuran 32-bit atau 4 byte. Karena program ini dikhususkan untuk arsitektur 32-bit
							; Di sistem 64-bit, alamat memori memiliki ukuran yang lebih besar dari sistem 32-bit yakni 8 byte atau 64-bit.
							; Itulah mengapa disini alamat memori pengembalian berukuran 32-bit.
							; Ukuran alamat memori berlaku untuk semua khusus arsitektur 32-bit. Kalau program ini jalan di sistem 64-bit, maka alamat memorinya akan lebih besar
							; Dan mengakses data setelah alamat memori 8, 12, 16, ..
	mov ebx, [ebp + 8]
	add eax, ebx
	ret

_start:
	push 5
	push 10
	call sumNum

	; exit
	mov eax, 1
	int 0x80
