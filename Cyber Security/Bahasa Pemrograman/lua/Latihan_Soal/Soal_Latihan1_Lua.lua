--Soal 1: Buat program lua yang menyimpann nama ku di variabel name, dan menghasilkan output "Hai, namaku (your name)"
local name = "Diandra"
print("Hai, namaku", name, "!")

--Soal 2: Tulis program yang meminta dua angka dari pengguna, lalu mencetak hasil dari pengurangan, penambahan, perkalian, dan pembagian.
print("Masukkan angka pertama:")
local angka1 = io.read("*n") -- io merupakan module yang didalamnya berisi method-method seperti read yang berfungsi mengambil input pengguna, dan "*n" untuk hanya menggambil input angka, jika string maka kosongkan saja

print("Masukkan angka kedua:")
local angka2 = io.read("*n")

print("Pembagian:", (angka1 / angka2))
print("Perkalian:", angka1 * angka2)
print("Penambahan:", angka1 + angka2)
print("Pengurangan:", (angka1 - angka2))

--Soal 3: Buat program yang menentukan apakah sebuah angka itu ganjil atau genap
print("Masukkan angka yang ingin di uji:"); local mynumber = io.read("*n")
if mynumber / 2 == 0 then
	print("Angka", mynumber, "Adalah Genap!")
else
	print("Angka", mynumber, "Adalah Ganjil!")
end

--Kalau mau nambah else if langsung tulis "elseif" lalu setelah itu tentukan kondisinya

--Soal 3: Buat program yang mencetak angka 1 sampai 10 (Menggunakan Pengulangan / Looping) 
--Informasi: Jika lupa, di Lua ada Looping for, while, dan repeat...until

-- for
	for i = 1, 5 do
		print("(for)Angka:", i)
	end

-- while
ii = 1
	while ii <= 5 do
		print("(while)Angka:", ii)
		--ii += 1
		ii = ii + 1
	end

-- repeat ... until
iii = 1
	repeat 
		print("(repeat)Angka:", iii)
		--iii += 1
		iii = iii + 1
	until iii == 6

--Soal 4: Buat table fields yang berisi 3 nama buah, lalu gunakan looping untuk mencetak semua nama buahnya
local buah = {"Apel","Mangga","Jeruk"}
for u = 1, 3 do
	print("Buah ke-",u, buah[u])
end
