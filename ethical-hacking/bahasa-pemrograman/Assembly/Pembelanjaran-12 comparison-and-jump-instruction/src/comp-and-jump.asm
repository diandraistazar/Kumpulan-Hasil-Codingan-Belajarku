; Di pembelanjaran kali ini kita akan mempelajari comparison dan jump. Comparison merupakan cara untuk membandingkan dengan satu nilai dengan nilai lainnya
; Ini mirip seperti Logical Operator seperti if, else-if, else atau switch. Jump merupakan cara dari dengan satu lokasi ke lokasi lain. Kalau di assembly berpindah antara satu label ke label lainnya

; Mnemonik yang akan digunakan untuk melakukan comparison adalah cmp. Ada beberapa mnemonik yang digunakan biasanya setelah melakukan cmp seperti je (jump-if-equal)

section .text
global _start

_start:
	mov eax, 10			; 1, 10, 100, 110, 1000, 1100
	mov ebx, 10
	cmp eax, ebx		; Setara dengan 5 - 2 = 3, karena hasilnya positif artinya angka 1 lebih besar dari angka 2. Maka SF = 0, ZF = 0, CF = 0
	je print				; Aku asumsikan bahwa, jl end akan jalan ketika hasil dari cmp diatas menghasilkan ZF = 1
	jmp end				; Namun, ketika ternyata ZF == 0, maka jalankan end saja

	; tambahan aja
	;mov eax, 2
	;mov ebx, 5
	;cmp eax, ebx		; Setara dengan 2 - 5 = 3, karena hasilnya negatif artinya angka 1 lebih besar dari angka 2. Maka SF = 1, ZF = 0, CF = 1

	;mov eax, 5
	;mov ebx, 5
	;cmp eax, ebx		; Setara dengan 5 - 5 = 0, karena hasilnya bukan positif maupun negatif melainkan 0, artinya angka 1 sama dengan angka 2. Maka SF = 0, ZF = 1, CF = 0

	
end:						; Exit program
	; Run code below, if SF = 1, CF = 1, 
	mov eax, 1
	mov ebx, 0
	int 80h

print:					; Print something
	mov eax, 4
	mov ebx, 1
	mov ecx, massage
	mov edx, 16
	int 80h

section .data
	massage db "hasilnya sama!", 10, 0

; Kesimpulannya, perbandingan dalam assembly atau tepatnya dalam machine code, tidak menggunana sintak seperti if, if-else, else bahkan switch. Melainkan menggunakan sesuatu yang lebih verbose,
; yakni menggunakan mnemonik dan eflags untuk menentukan suatu kondisi itu benar atau salah dan jalankan mana ketika benar dan jalankan mana ketika salah.
; seperti kode diatas, untuk melakukan angka 1 == angka2, maka menggunaken mnemonik cmp angka1, angka2. 
; yang dilakukannya mengurangkan angka 1 dengan angka2, hasil dari operasinya yang menentukan apa nantinya
; Misalnya hasilnya positif, maka eflagsnya ZF = 0, CF = 0, SF = 0, OF = 0. Mnemonik yang digunakan selanjutnya biasanya seperti jnz, je, jnc, dan lainnya berurusan dengan SF == 0
; Misalnya hasilnya negatif, maka eflagsnya ZF = 0, CF = 1, SF = 1, OF = 0. Mmemonik yang bisanya digunakan biasanya seperti jl, jle, jg, jge, dan lainnya berurusan dengan SF == 1 dan CF = 1
; Misalnya hasilnya 0, maka eflagsnya ZF = 1, CF = 0, SF = 0, OF = 0. Maka mnemonik yang digunakan biasanya je, jz, dan lainnya yang berurusan dengan ZF = 1
