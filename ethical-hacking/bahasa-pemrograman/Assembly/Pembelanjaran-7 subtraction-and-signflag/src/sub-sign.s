section .text
global _start

_start:
	mov bl, 1
	mov cl, 5
	sub bl, cl				; sesuai namanya, mnemonik ini berfungsi untuk mengurangkan suatu angka dengan angka yang lain, lalu menyimpan hasilnya pada operan1
								; pengurangan dari angka tersebut menghasilkan -4. Nah karena itu register eflags terutama sign flag akan berisi nilai 1 yang menandakan bahwa hasil aritmatika sebelumnya merupakan nilai negatif
	mov cl, 4
	add bl, cl				; Kemudian aku menambahkan, 4 ke -4 maka hasilnya adalah 0

	mov al, 1
	int 80h
