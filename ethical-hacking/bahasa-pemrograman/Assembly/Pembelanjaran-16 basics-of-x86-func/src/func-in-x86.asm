; Kali ini kita akan mempelajari bagaimana sebenarnya sebuah function itu bekerja dalam assembly.
; Mnemonik yang digunakan nanti adalah call. Sebenarnya call dan jmp mereka itu hampir mirip cara kerjanya, yaitu lompat ke lokasi tertentu.
; Cuman, jika menggunakan call. Alamat Intruksi setelah call akan disimpan di dalam stack, sehingga ketika selesai menjalankan call, kita akan kembali ke titik intruksi setelah call dipanggil. 
; Sementara, jika menggunakan jmp. Kita hanya melompat ke lokasi tertentu tanpa menyimpan instruksi selanjutnya, sehingga kita tidak dapat melanjutkan dimana titik akhir setelah jmp dipanggil
; Kurang lebih begitu bedannya

section .text
global _start

sumNums:
	add eax, ebx
	;push 5						; alamat pengembalian kan disimpan di awal stack saat call dipanggil. Apakah menurutmu jika sebelum ret terdapat "push 5" tetap berhasil?
									; Tidak, akan terjadi segmentation fault karena yang diakses merupakan angka 5 bukan alamat memori
									; Setelah aku lakukan push 5, terjadi segmentation fault. Dari sini bisa disimpukan ret bekerja dengan esp
									; tanpa push 5, esp akan menunjuk alamat memori paling awal yaitu alamat pengembalian, tapi sayangnya aku malah melakukan push 5 ke stack sehingga esp bukan lagi menunjuk ke alamat memori pengembalian melainkan angka 5
	ret

_start:
	mov eax, 5					; Memindahkan angka 5 ke eax
	mov ebx, 10					; Memindahkan angka 10 ke ebx
	call sumNums				; Panggil sumNums
									; Apa yang terjadi disini? call pertama-tama akan push terlebih dahulu alamat memori instruksi selanjutnya yaitu mov ebx, eax
									; Setelah itu akan terjadi jmp ke sumNums. Dan seperti jmp kita memulai dari lokasi tersebut.
									; Ketika tibanya mneomnik ret atau return. ret akan mengambil memory address intruksi selanjutnya di stack memory
									; Dan jmp ke lokasi tersebut. Sehingga program dapat melanjutkan kembali mengeksekusinya
									; Oke setelah aku amati. Setiap data yang dipush ke stack segment. Register esp (Extended Source Pointer) itu akan berkurang sesuai data yang dipush, semakin besar ukurannya dalam byte maka semakin besar juga berkurangnya nilai register pada esp
									; Kalau tidak percaya, coba debugging program ini dan lihat hasilnya
									; Sebagai catatan, Stack memory merupakan high address memory, artinya alamat memorinya tidak dari 0x0000000 melainkan dari 0xfffxxxx
									; Nah, berdasarkan catatan itu, kalau disimpulkan apa yang dilakukan call, push, dan ret: .
									; Call akan menyimpan titik intruksi selanjutnya dengan push ke stack memory.
									; Nah, karena terdapat mnemonik push, nilai register esp akan dikurangi sesuai ukuran data yang ingin disimpan. Setelah nilai esp dikurangi, maka artinya posisi pointer dari bergeser ke titik arah sebelumnnya, bukan selanjutnya
									; Setelah bergeser, baru datanya disimpan di alamat memori yang ditunjuk oleh esp. Ukurannya bakal pas
									; Kemudian ret atau return. ret akan mengambil alamat memori insturksi selanjutnya yang disimpan di stack, dan memuatnya ke dalam IP (Instruction Pointer) tempat penunjuk alamat memori instruksi-instruksi
									; Maka setelah menggunakan ret, IP sekarang akan menunjuk ke intruksi setelah call dipanggil, dan program kembali berjalan seperti semula

	mov ebx, eax				; Simpan hasilnya di ebx
	mov eax, 1					; Gunakna eax sebagai syscall_exit
	int 0x80						; call kernel
