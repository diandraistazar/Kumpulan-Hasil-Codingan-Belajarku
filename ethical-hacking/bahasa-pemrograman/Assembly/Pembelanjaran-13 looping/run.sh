nasm -f elf src/loop.asm
ld -m elf_i386 src/loop.o -o loop
rm src/loop.o
#gdb ./loop
