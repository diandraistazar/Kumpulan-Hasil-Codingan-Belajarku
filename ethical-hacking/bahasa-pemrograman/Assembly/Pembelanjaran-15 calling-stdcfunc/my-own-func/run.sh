#!/bin/env bash
nasm			src/calling.asm									-f elf				# Compile asm to object calling.asm
gcc -c		src/calculate.c	-o	src/calculate.o		-m32					# Compile to object calculate.c
gcc  src/calling.o src/calculate.o -o cal -m32

# remove
rm src/calling.o src/calculate.o
