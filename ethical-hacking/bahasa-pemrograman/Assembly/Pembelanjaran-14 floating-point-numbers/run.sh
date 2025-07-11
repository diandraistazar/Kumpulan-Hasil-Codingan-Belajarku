nasm -f elf src/fltptn.asm
ld -m elf_i386 src/fltptn.o -o fltptn
rm src/fltptn.o
