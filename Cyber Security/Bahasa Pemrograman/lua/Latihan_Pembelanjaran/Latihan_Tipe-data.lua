--Tipe data dalam Pemrograman Lua

--1. Tipe data Number
print(type(1) .. ' integer') --output 'number'
print(type(1.5) .. ' float') --output 'number'

--2. Tipe Data String
print(type('string') .. ' string-character') --output 'string'
print(type('10') .. ' string-number')

--3. Tipe data table (Table fields)
murid1 = {
	nama = 'diandra',
	kelas = 10,
	mapel_fav = 'Informatika'
}

print(type(murid1) .. ' key-value') --output 'table'

--4. Tipe data table (Array)
daftar_murid = {'Mita','Cappie','Ryu','Cae Hae'}
--print(table.concat(daftar_murid, ", ")) --table.concat artinya mengambil method concat dari table, berfungsi mencetak isi dari table array tersebut.
print(type(daftar_murid) .. ' Array')

--5. Tipe data Boolean
print(type(2 == 2), 'true') --output boolean-true
print(type(5 > 20) .. ' false') --output boolean-false

-- Tipe data ini biasanya diperoleh dari hasil pengkondisian
