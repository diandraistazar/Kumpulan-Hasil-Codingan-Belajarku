nasm -f elf src/logical.asm
ld -m elf_i386 src/logical.o -o logical
rm src/logical.o
gdb ./logical
