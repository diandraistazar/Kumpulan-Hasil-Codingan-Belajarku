nasm -f elf src/comp-and-jump.asm
ld -m elf_i386 src/comp-and-jump.o -o comp-and-jump
rm src/comp-and-jump.o
gdb ./comp-and-jump
