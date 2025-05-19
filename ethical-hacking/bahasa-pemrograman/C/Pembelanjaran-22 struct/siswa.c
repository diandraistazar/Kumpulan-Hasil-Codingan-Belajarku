#include <stdio.h>

struct Siswa {
	char nama[20];
	int umur;
	char kelas[4];
	int label;
};

void print_struct(struct Siswa[], int);

int main() {
	struct Siswa siswa2 = {.nama = "diandra"};

	struct Siswa siswa[] = {
		{"Diandra", 16, "X", 5},
		{"Mita", 18, "XII", 4},
		{"Lapwing", 17, "XI", 6},
		{"Fern", 16, "X", 5},
		{"Ubel", 16, "X", 5}
	};
	int size = sizeof(siswa)/sizeof(siswa[0]);

	print_struct(siswa, size);
	return 0;
}

void print_struct(struct Siswa name[], int many) {
	for(int x = 0; x < many; x++) {
		printf("Nama: %s\nUsia: %d\nKelas: %s-%d\n\n", name[x].nama,name[x].umur, name[x].kelas, name[x].label);
	}
}
