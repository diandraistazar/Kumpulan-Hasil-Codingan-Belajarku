--Latihan 3 mengenai function, looping, dan lainnya. Lihat saja

-- 10 Soal : Easy, Menengah, & Lanjutan
--1. Buat function bernama 'sayHello' yang mencetak "Hello, Lua!" saat dipanggil
	--Function decleration
		function sayHello() print("Hello, Lua!") end
		sayHello() --output "Hello, Lua!"

	--Function Expression
		sayHello1 = function() print("Hello, Ryu!") end
		sayHello1() --output "Hello, Ryu!"

--2. Buat looping dengan for yang mencetak angka dari 1 - 10
for i = 1, 10 do
	print('For',i) --output 1 .. 10
end

--3. Buat looping dengan while yang mencetak angka dari 1 - 10
x = 1
while 10 >= x do
	print('While',x) --output 1 .. 10
	x = x + 1
end

--4. Buat function bernama 'multiply' yang menerima dua angka dan mengembalikan hasil perkaliannya
	--function decleration
		function multiply(a,b) 
			return string.format("%d * %d is %d",a,b,a*b)
		end
	hasil = multiply(10,10)
	print(hasil) --output 100

	--function expression
		multiply1 = function(a,b) 
			return a .. ' * ' .. b .. ' is ' .. a*b
		end
	hasil = multiply1(5,5)
	print(hasil) --output 25

--5. Buat table-array dengan nilai {10,20,30,40,50} dan gunakan looping 'while' dan 'for' untuk mencetak semua isinya
justTable = {10,20,30,40,50}

	--For (Method 1)
	--ipairs digunakan pada table yang memiliki indeks seperti table-array
		for i, v in ipairs(justTable) do 
			print("(For1)",i .. ':',v)
		end

	--For (Method 2)
		for i = 1, #justTable do
			print("(For2)",i .. ':',justTable[i])
		end

	--While
	ui = 1
	indeksOfTable = #justTable
	while ui <= indeksOfTable do print('(While)',ui .. ':', justTable[ui]); ui = ui + 1 end

		--ISTIRAHAT :3--

--6. Buat function untuk menghitung faktorial dari suatu angka menggunakan rekursif
--7. Buat function yang mengembalikan function lain yang bisa menghitung berapa kali ia dipanggil
--8. Buat looping yang mencetak angka acak antara 1 sampai 10, dan berhenti saat menemukan angka diatas 90
--9. Buat function yang membagi dua angka, tapi gunakan pcall untuk menangani error jika pembagian dengan nol terjadi
--10. Buat table yang memperesentasikan vektor (x, y), lalu gunakan metatable agar dua table dapat dijumlahkan
