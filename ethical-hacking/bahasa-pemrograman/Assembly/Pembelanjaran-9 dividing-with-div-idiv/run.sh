nasm -f elf src/dividing.asm
ld -m elf_i386 src/dividing.o -o dividing
rm src/dividing.o
gdb ./dividing
