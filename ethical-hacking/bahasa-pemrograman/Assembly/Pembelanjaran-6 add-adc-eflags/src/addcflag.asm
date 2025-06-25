; Oke!, di pembelajaran kali ini akhirnya kita akan mempelajari mnemonik baru selain mov, bosen banget daritadi mov mulu dipake, tapi akhirnya ada hal baru!
; Oke-oke, mnemonik yang akan kita gunakan adalah add dan adc.
; Untuk penjelasan mnemonik-nya silahkan baca Assembly.odt yak

section .text
global _start

_start:
	;mov bl, 1						; memindahkan angka 1 ke base register (8 bit)
	;mov cl, 2						; memindahkan angka 2 ke control register (8 bit)
	;add bl, cl						; menambahkan nilai base register dan control register, setelah itu simpan hasilnya ke base register

	mov bl, 255
	mov cl, 10 
	add bl, cl

	mov bl, 0
	adc bl, 1

	; bl == 0 + 1 = 1 + carry flag
	; Nah ketika di adc, nilai yang ditambahkan oleh carry flag tergantung 1 bit atau 0 bit isinya
	; Jika carry flag bernilai 1 maka ditambahkan 1 desimal, sementara jika 0 maka ditambahkan 0 desimal

	mov al, 1						; sisanya exit
	int 80h
