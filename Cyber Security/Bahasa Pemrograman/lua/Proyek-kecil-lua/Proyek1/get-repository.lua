--About get-repository (tidak dilanjutkan)
--Created: 24 Mar 2025 -- memakan waktu 3 hari

--Ini merupakan proyek pertama-ku, proyek ini kulakukan untuk melatih skill pemrograman di bahasa Lua. 

--Proyek yang ku kerjakan adalah program sederhana untuk otomatis tugas. Biasanya kalian jika ingin meng-clone repository dari github atau gitlab dan sejenisnya, pastinya kalian harus membuka command line dan menulis 'git clone <repository> <path>'. Dengan program ini semuanya akan dilakukan secara otomatis. Hanya dengan memasukkan link 'repository' dan 'path' semuanya akan selesai. 

--Aku sadar dalam program ini masih banyak kekurangan, ya namanya proyek pertama pastinya masih banyak masalah, tapi dari kekurangan ini lah aku dapat memperbaikinya dan menjadi lebih baik di masa depan :).

--Fitur yang belum diselesaikan : 'costum path'

-- Argumen ketika menjalankan skrip ini
user_input_argumen = arg

-- Jika argumen tidak ada
if #user_input_argumen == 0 then
print('--------------------------')
print('Masukkan "LINK" Repository')
io.write('>> ')
user_input = io.read()

-- Jika argumen ada, user_input akan diisi dengan user_input_argumen[1]
else
	user_input = user_input_argumen[1]
end

key = true
while key do

print('--------------------------')
print('(About getrepo)\n- Skrip ini berfungsi untuk mempermudah meng-clone repository dari "github" atau sejenisnya.\n\n- Skrip ini juga dapat melakukan "makepkg -si" secara otomatis yang biasanya untuk menginstall package dari AUR package.')
print('--------------------------')
print('Link :', user_input)
options = {'[1]Default (~/Repository)','[2]Costum-Path'}
print('Opsi :', options[1], options[2])
io.write('\nPilih [1-' .. #options .. "]" .. " : ")
user_option = tonumber(io.read())
print('--------------------------')



if type(user_option) == 'number' then
	if user_option <= #options then
		if user_option == 1 then


			is_there_repo_dir = os.execute('ls ' .. os.getenv("HOME") .. ' | grep -w Repository')
if is_there_repo_dir == nil then 
	print('In ' .. os.getenv('HOME') .. ' directory, we cannot find the Repository directory, so we will create it for you')
	os.execute('mkdir ' .. os.getenv('HOME') .. '/Repository')
end


			--Default Directory

			default_path = os.getenv("HOME") .. '/Repository'
			home_directory = os.getenv("HOME") .. "/"
			local temp_directory = user_input:match(".*/(.*).git$")

			if #temp_directory == nil then
				return print('Repository Sementara -->' .. temp_directory .. '<-- tidak VALID')
			end
			print('Deleting ' .. temp_directory .. ' Repository yang lama ...')
			print(os.execute('rm -fr ' .. default_path .. "/" .. temp_directory .. " " .. home_directory .. temp_directory))
			print('Default-Path is : ' .. default_path)
			print('Repository :', user_input)
			print('Temp-Repository :', temp_directory)
			os.execute('mkdir ' .. home_directory .. temp_directory)
			print('\nCloning Repository...')
			print(os.execute('git clone ' .. user_input .. ' ' .. home_directory .. temp_directory))
			print('---------------------------------------')
			print('Membuat directory di', default_path .. '/' .. temp_directory)
			os.execute('mkdir ' .. default_path .. "/" .. temp_directory)
			print('Memindahkan directory', home_directory .. temp_directory .. '/* ke ' .. default_path .. '/' .. temp_directory)
			os.execute('mv' .. ' ' .. home_directory .. temp_directory .. '/*' .. ' ' .. default_path .. "/" .. temp_directory .. " && rm -fr " .. home_directory .. temp_directory)
			is_inside_makepkg = false
			checking = os.execute('ls ' .. default_path .. '/' .. temp_directory .. " | grep PKGBUILD")

			if checking == true then
				print('\nWARNING : Ada "PKGBUILD" di dalam directory -->', default_path .. '/' .. temp_directory)
				is_inside_makepkg = true
			end

			if is_inside_makepkg then
			io.write('\nApakah kamu ingin menginstall ',temp_directory,' langsung ? [y|n] : ')
			confirm = io.read()

			if confirm == ('y' or 'Y') then
				print(os.execute('cd ' .. default_path .. "/" .. temp_directory .. " && makepkg -si && cd"))
			end

		end
			key = false
		end

		--Costum Path Directory
		if user_option == 2 then
			print('Isi Costum-Path :')
			path_costum = io.read()

		end
	else 
		print('Opsi-nya hanya |', table.concat(options, " "))
	end

else
	print('Maaf hanya opsi number / angka yang tersedia :3')
end

end

print('\n\n-----(Repository had been cloned)-----')
print('Terima Kasih telah menggunakan Script sederhana ini :3'); os.exit()
