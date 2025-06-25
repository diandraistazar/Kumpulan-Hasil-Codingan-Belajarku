#!/bin/env bash
nasm -f elf src/addcflag.asm
ld -m elf_i386 src/addcflag.o -o addcflag
rm src/addcflag.o
