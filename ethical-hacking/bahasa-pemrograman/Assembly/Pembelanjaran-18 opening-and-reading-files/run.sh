nasm -f elf src/files.asm
ld -m elf_i386 src/files.o -o files
rm src/files.o
