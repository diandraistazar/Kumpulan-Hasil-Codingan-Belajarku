nasm -f elf src/sub-sign.s
ld -m elf_i386 src/sub-sign.o -o sub-sign
rm src/sub-sign.o
./sub-sign
