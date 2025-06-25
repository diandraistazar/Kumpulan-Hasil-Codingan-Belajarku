; for 32-bit arch

section .data
	massage db "Hello World", 10, 0			; "Hello World" string with newline and null terminator charachter
	len_mass equ $ - massage

section .text
	global _start									; memberitahu program bahwa _start: merupakan titik awal masuk program

	_start:
		; Print massage to stdout
		mov eax, 4									; syscall 4 = sys_write
		mov ebx, 1									; File descriptor 1 == stdout
		mov ecx, massage							; alamat memori massage
		mov edx, len_mass							; panjang string massage
		int 0x80										; call kernel

		; Exit program
		mov eax, 1									; syscall 1 = syscall_exit
		mov ebx, 0									; means success
		int 0x80										; call kernel
