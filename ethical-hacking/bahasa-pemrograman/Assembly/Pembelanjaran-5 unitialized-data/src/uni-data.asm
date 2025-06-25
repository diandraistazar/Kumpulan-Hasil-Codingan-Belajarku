; Sekarang, kita akan mempelajari segmen .bss yang mana merupakan section deklerasi data tanpa insialisasi nilai
; Fungsi dari section .bss ini biasanya digunakan untuk menyimpan buffer yang nantinya digunakan saat program jalan
; Kita menggunakan keyword direktif data untuk section .bss, mereka seperti memesan byte yang nantinya akan digunakan menyimpan nilai
; Sebelumnnya kita menggunakan direktif section .data untuk membuat variabel dengan keyword db, dw, dd dan lainnya kan?, nah
; Kalau di section .bss kita menggunakan resb, resw, resd, dan lainnya. Hanya mengganti depannya jadi Reverse, contoh pada resb itu "Reverse Byte"

section .bss						; Section .bss berfungsi memesan block memori tanpa insialisasi nilai
	massage resb        3
;	<name>  <direktif>  <jumlah-byte>
; Dari sini, artinya aku akan memesan 3 byte memori (resb == 1 byte) dengan label massage, karena itu ini udah menjadi sebuah array dengan 3 element

section .text
global _start

_start:
	; mov [massage], 1			; Ini salah, assembler nggak tahu harus mengisi berapa byte ke massage dari angka 1, jadi harus secara ekplisit mengatakan bahwa itu byte == 1
	; mov byte [massage], 1		; Ini benar, menggunakan keyword byte == 1 byte, maka assembler tahu harus memindahkan angka 1 dengan ukuran 1 byte

	; Mungkin kalian bertanya, kenapa harus secara ekplisit segala, kan angka 1 itu cuman 8 bit dan seharusnya assembler tahu ini hanya memakanan 1 byte.
	; Alasannya keamanan, assembler seperti nasm itu tidak dapat menentukan secara otomatis byte berapo yang digunakan. Kalau aja assembler pakai 2 byte gimana untuk angka 1? Kebesaran kan? bisa saja terjadi overflow dan lain-lain

	 mov bl, 1						; Element pertama array massage
	 mov [massage], bl			; Nah ini juga benar, karena bl itu ukurannya 7-0 bit, maka saat diisi ke [massage] itu ukurannya udah ada dari register bl tersebut. Jadi tidak perlu secara ekplisit menentukan byte berapa karena dari registernya udah ukuran 7-0 bit

	 mov bl, 2
	 mov [massage+1], bl			; Element kedua array massage

	 mov bl, 3
	 mov [massage+2], bl			; Element ketiga array massage

	mov al, 1						; syscall_exit
	mov bl, 0						; return 0
	int 80h

; Ini bagian bonus, ada keyword yang ingin ku jelaskan di section .data
section .data
	hello db 4 dup(0)				; Kira-kira, maksudnya apa?. 
; aku membuat variabel hello dengan ukuran 4 byte == 32 bit. Jadi aku buat array dengan 4 element
; nah keyword dup(<value>), merupakan cara menginsialisasi nilai default pada variabel.
; Karena aku buat 4 element pada array, maka masing-masing element akan diisi dengan nilai 0.
