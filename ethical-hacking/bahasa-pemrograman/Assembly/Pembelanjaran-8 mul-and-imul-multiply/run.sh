nasm -f elf src/multiply.asm
ld -m elf_i386 src/multiply.o -o multiply
rm src/multiply.o
./multiply
