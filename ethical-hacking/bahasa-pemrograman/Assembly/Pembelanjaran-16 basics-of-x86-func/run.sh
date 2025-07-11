nasm -g -f elf src/func-in-x86.asm
ld -m elf_i386 src/func-in-x86.o -o func-in-x86
rm src/func-in-x86.o
