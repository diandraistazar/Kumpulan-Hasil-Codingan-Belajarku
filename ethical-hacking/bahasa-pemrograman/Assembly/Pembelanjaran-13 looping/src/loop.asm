; Pembelanjaran kali ini kita akan mempelajari cara membuat looping di assembly. Di assembly sendiri tidak ada sintak seperti for dan while
; Tapi, kita bisa mengikuti perilaku looping dengan mnemonik-mnemonik yang ada. Daripada bingung mari praktek

; Sekarang, aku pingin buat program yang akan melakukan looping pada array.

section .data
	numbers db 1,2,3,4,5
	len_num equ 5

section .text
global _start

_start:
	; Looping
	mov bl, [numbers+ecx]			; Akses element array dengan indeks dari ecx
	add dl, bl							; menambahkan semuanya ke dl
	inc ecx								; Increment cl
	cmp ecx, len_num					; Perbandingan
	jl _start							; Jump ke _start ketika flag SF == 1
	; bl = dijadikan penyimpan sementara bagi element array numbers
	; dl = merupakan tempat hasil dari semua penjumlahan element array numbers
	; ecx = sebagai counter berapa kali perulangan terjadi
	
	; Penjelasan singkat apa yang terjadi
	; Seperti yang kalian lihat bl, dl, ecx, semuanya isinya masih 0 atau 00000000
	; Kemudian intruksi pertama, mengakses elemet array pertama dengan [numbers+ecx], di C seperti ptr+0. Elemet pertama berupa angka 1, setelah itu muat ke register base register
	; Kemudian instruksi kedua, isi base register ditambahkan dengan data register. Karena data register aku gunakan untuk menyimpan hasil semua penjumlahan semua elemet
	; Kemudian instruksi ketiga, melakukan increment / penambahan kepada ecx untuk menandakan bahwa perulangan telah melewati 1 kali
	; Kemudian instruksi keempat, membandingkan ecx dengan jumlah element pada array. Mungkin kalian bertanya kenapa angka 5, di C itu seperti 0 < 5, jadi 0-4 masih jalan, tapi ketika menyentuh angka 5, looping berakhir. Yang terjadi disini jika hasil aritmatika negatif maka mengaktifkan SF = 1. Sementara, ketika hasilnya aritmatika tidak negatif dan menghasilkan ZF = 1. 
	; Kemudian instruksi kelima, mnemonik jenis "jmp" yaitu jl (jump-if-less), mnemonik ini akan jalan ketika flag SF = 1 atau hasil artimatika sebelumnnya negatif, sementara ketika SF = 0 atau hasil aritmatika sebelumnnya 0, maka akan diabaikan
	; Nah, kembali lagi ke instruksi pertama, karena jl disini dijalankan artinya hasilnya belum sampai tujuan.
	; Jika telah sampai ke titik yang telah ditentukan, jl tidak dijalankan, dan intruksi dibawah ini sisanya akan dijalankan.
	
	; Intruksi untuk close program
	mov eax, 1
	mov ebx, edx		; Store sebagai return exit
	int 0x80

; Fiuhh. Jadi kesimpulannya, pengulangan atau looping yang kalian lakukan di bahasa tingkat tinggi seperti C, C++, Java dan lainnya. Dalam melakukan perulangan dalam machine code seperti ini. Kita tidak menggunakan sintak seperti for atau while atau bahkan mnemonik-mnemonik untuk looping. Kita melakukannnya dengan mengikuti perilaku bagaiman looping bekerja dalam machine code
; Dengan melakukan hal ini, dapat membuat kalian mengerti bagaimana proccesor melakukan perulangan pada sebuah program.
