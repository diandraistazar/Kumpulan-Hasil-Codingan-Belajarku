nasm -f elf src/data.asm 
ld -m elf_i386 src/data.o -o data
rm src/data.o
