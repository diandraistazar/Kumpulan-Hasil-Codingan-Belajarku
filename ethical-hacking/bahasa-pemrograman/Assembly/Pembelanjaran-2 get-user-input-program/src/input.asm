; for 32-bit arch

section .text
global _start 

_start:
	; print getUserInput
	mov eax, 4													; syscall write
	mov ebx, 1													; file descriptor stdout == 1
	mov ecx, print_getInput									; print get input
	mov edx, 19													; length of print_getInput
	int 0x80														; call kernel

	; get user input
	mov eax, 3													; syscall read
	mov ebx, 0													; file descriptor stdin == 0
	mov ecx, buffer											; store userInput to buffer memory
	mov edx, 5													; length of buffer
	int 0x80														; call kernel

	; print user input
	mov eax, 4													; syscall write
	mov ebx, 1													; file descriptor stdout == 1
	mov ecx, print_finalInput								; print_finalOutput first
	mov edx, 17													; length of print_finalOutput
	int 0x80														; call kernel

	mov eax, 4													; syscall write
	mov ebx, 1													; file descriptor stdout == 1
	mov ecx, buffer											; print buffer
	mov edx, 5													; length of buffer
	int 0x80														; call kernel for execute it

	; exit
	mov eax, 1													; syscall exit
	mov ebx, 0													; status 0 means success
	int 0x80														; call kernel

section .data
	print_getInput db "Masukkan angkamu: ", 0
	print_finalInput db "Inputmu adalah: ", 0

section .bss													; reverse define byte
	buffer resb 5												; define 5*2 = 10 byte in memory to store user input
