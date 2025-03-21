--Soal 1: Buat sebuah table bernama data, lalu ditambahkan 'nama' bernilai 'diandra', 'usia' bernilai 15, dan 'hobi' bernilai 'Nonton anime'. Cetak semuanya dengan print()
data = {
	nama = 'Diandra',
	usia = 15,
	hobi = 'Nonton Anime'
}
print(data.nama) --output 'Diandra'
print(data.usia) --output 15
print(data.hobi) --output 'Nonton Anime'

--Soal 2: Buat table bernama angka yang berisi angka 10,20,30,40,50. Cetak angka pertama dan terakhir. Tambahkan angka 60 diakhir setelah itu cetak isi semua table-nya
angka = {10,20,30,40,50}
print(angka[1])
print(angka[5])
table.insert(angka, 6, 60)
print(table.concat(angka, ", "))

--Soal 3: Buat table siswa yang berisi key-value yang berisi nama bernilai 'Diandra', dan nilai yang bernilai table-key-value lagi matematika bernilai 90, bahasa bernilai 85, dan sains bernilai 88
siswa = {
	nama = 'Diandra',
	nilai = {
		matematika = 90,
		bahasa_inggris = 85,
		sains = 88
	}
}

print(siswa.nilai.matematika) --output 90
siswa.nilai.sejarah = 80 --tidak ada method yang digunaakn menambahkan, jadi kita melakukan assignment langsung
print(siswa.nilai.sejarah) -- output 80

function sapa(name)
	print('Hi, ' .. name)
end

sapa('Mita')

---------------------------------------------------\
--Soal 1: Buat variabel status dengan nilai true, lalu cetak variabel status dan tipe datanya
status = true
print('value:', status, 'type:', type(status))

--Soal 2: Buat variabel pi dengan nilai 3.14159, lalu cetak 2 digit terakhir nilai angka tersebut
pi = 3.14159
print('2 Digit last:', tonumber(tostring(pi):sub(-2)))

--Soal 3: Buat Variabel kalimat berisi string 'Halo, lua' dan gabungkan dengan ' Selamat Belajar'
kalimat1, kalimat2 = 'Halo, lua', 'Selamat Belajar'
print(kalimat1, kalimat2)

--Soal 4: Buat sebuah function bernama sapa yang menerima parameter name, dan mencetak "Hallo, <name>!"
function sapa(name)
	print('Hallo, ' .. name .. '!')
end

--Soal 5: Buat sebuah table kendaraan yang berisi "Mobil", "Motor", "Sepeda" cetak kendaraan pertama
kendaraan = {
	'Mobil',
	'Motor',
	'Sepeda'
}
print(kendaraan[1])

--Soal 6: tambahkan angka 70 kedalam table kendaraan setelah itu cetak lengkap isinya
table.insert(kendaraan,70)
print(table.concat(kendaraan,", "))

-----------------------------------------------
murid10 = {
	kecepatan = 100
}

function murid10:tempuh()
	print('Mobil mu menempuh kecepatan ' .. self.kecepatan .. ' km/jam')
end

murid10:tempuh()
