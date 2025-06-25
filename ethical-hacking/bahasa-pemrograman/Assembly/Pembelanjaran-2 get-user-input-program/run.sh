#!/bin/env bash

# compile assembly source
nasm -f elf src/input.asm
ld -m elf_i386 -o input-asm src/input.o

# compile C source
# gcc -o input-c --std=c99 src/input.c
