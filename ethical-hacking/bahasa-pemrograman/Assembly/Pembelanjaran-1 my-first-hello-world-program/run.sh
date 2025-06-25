#!/bin/env bash
nasm -f elf64 src/hello-world.asm
ld -o my-hello-asm src/hello-world.o
./my-hello-asm
