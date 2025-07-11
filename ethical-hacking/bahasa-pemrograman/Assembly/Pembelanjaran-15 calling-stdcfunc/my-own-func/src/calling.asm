; Sebelumnnya, kita memanggil standard C Func. Sekarang kita akan memanggil function buatan kita sendiri :3

extern calculate
extern exit

section .text
global main

main: 
	push 10								; Sebagai argument a
	push 20								; Sebagai argument b
	call calculate						; panggil calculate function

	push eax								; return dari function disimpan di register eax. Maka register eax akan diteruskan lagi sebagai argument exit function
	call exit							; panggil exit function

	mov eax, 1
	int 0x80
