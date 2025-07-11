nasm -f elf src/calling.asm
gcc -m32 src/calling.o -o calling
rm src/calling.o
./calling
