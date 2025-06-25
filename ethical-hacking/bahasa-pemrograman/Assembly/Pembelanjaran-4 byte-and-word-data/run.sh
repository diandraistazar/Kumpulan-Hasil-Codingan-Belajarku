nasm -f elf src/byte-word.asm
ld -m elf_i386 src/byte-word.o -o byte-word
