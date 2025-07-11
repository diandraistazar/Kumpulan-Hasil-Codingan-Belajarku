nasm -f elf src/shift.s
ld -m elf_i386 src/shift.o -o shift
rm src/shift.o
gdb ./shift
