--! Ini hanya tempat saya latihan, ingin melihat penjelasan lebih lengkapnya lihat di dokumen di directory ini

-- tanda "--" berfungsi untuk membuat comment
-- Sintaks sederhana dari Bahasa Lua
-- Global Variable
a = 13
b = 2
c = a + b
--print('Hasilnya adalah', c)
--print('Hasilnya adalah ' .. c) --fungsi .. itu mirip seperti + di java script seperti print('Hasilnya adalah' + c)

-- Local Variabel
--local x, y, z
x = 5
y = 2
z = (x + y)

x, y = y, x
z = (x - y)
--print(x, y, z)

-- Table Fields
murid1 = {
	nama = "Diandra",
	usia = 15,
	tinggi = 165
}

--print("Nama saya", murid1.nama)
--print("Saya berusia", murid1.usia, "tahun")
--print("Tinggi saya adalah", murid1.tinggi, "cm")

h = {}
	i = "saya baru"
	h[i] = 1
	h[20] = "Mita"

--print(h)
