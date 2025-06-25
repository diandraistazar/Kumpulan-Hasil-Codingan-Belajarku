nasm -f elf src/uni-data.asm
ld -m elf_i386 src/uni-data.o -o uni-data
rm src/uni-data.o
