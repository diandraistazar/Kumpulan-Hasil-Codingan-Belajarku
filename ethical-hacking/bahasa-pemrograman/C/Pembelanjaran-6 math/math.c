#include <stdio.h>
#include <math.h> // library math untuk melakukan operasi matematika

void main() {

	// Fungsi untuk fungsi sqrt()
	void fungsi_sqrt() {
		float a = sqrt(400); // berfungsi untuk menghitung akar kuadrat dari suatu angka
		printf("sqrt(400)  %f\n", a); // hasilnya 20.00.. hasil dari akar kuadrat 400
	}

	// Fungsi untuk fungsi pow()
	void fungsi_pow() {
		float b = pow(2, 2); //berfungsi untuk menghitung bilangan yang dipangkatkan dengan bilangan lain
		printf("pow(2, 2) %f\n", b); // hasilnya 100.000 .. hasil dari 10 pangkat 2
	}

	// Fungsi untuk fungsi round()
	void fungsi_round() {
		int c = round(5.49); // membulatkan angka terdekat, jika < .49 hasilnya angka dibawahnya dibulatkan, kalau > .50 hasilnya angka diatas dibulatkan
		printf("round(5.49) %d\n", c); // hasilnya nya adalah 5
		c = round(5.50);
		printf("round(5.50) %d\n", c);
	}

	void fungsi_ceil() {
		int d = ceil(5.2); // selalu membulatkan angka keatas, contoh kalau angka 5.2 akan dibulatkan ke angka 6
		printf("ceil(5.2) %d\n", d);
	}

	void fungsi_floor() {
		int e = floor(8.95); // kebalikan dari ceil(), angka akan selalu dibulatkan kebawah, contoh angka 5.8 akan dibulatkan ke angka 5.
		printf("floor(8.95) %d\n", e);
	}
	
	void fungsi_fabs() {
		double f = fabs(-100.5); // fungsi ini berfungsi untuk menghitung nilai absolut dari angka desimal.
														 // bingung? simpelnya, fungsi ini akan selalu mengembalikan angka positif. contoh jika -5 masa hasilnya 5, kalau angkanya 5 ya tetap 5. Fungsi ini akan selalu mengembalikan bilangan positif
		printf("fabs(100) %lf\n", f);
	}

	void fungsi_log() {
		double g = log(6); // fungsi ini berfungsi untuk menghitung logaritma natural (logartima berbasis e) dari sebuah bilangan
		printf("log(6) %lf\n", g);
	}

	void fungsi_sin() {
		double h =	sin(4); // fungsi ini merupakan fungsi trigonometri (sinus), aku juga tidak begitu paham, jadi kurang lebih begitu fungisnya
		printf("sin() %lf\n", h);
	} 

	void fungsi_cos() {
		double i = cos(4); // fungsi ini juga dari trigonometri berfungsi untuk menghitung nilai cosinus dari suatu sudut dalam radian
		printf("cos() %lf\n", i);
	}

	void fungsi_tan() {
		double j = tan(4); // fungsi ini juga merupkaan trigonometri berfungsi untuk menghitung nilai tangen dari suatu sudut radian
		printf("tan() %lf\n", j);
	}

	fungsi_sqrt();
	fungsi_pow();
	fungsi_round();
	fungsi_ceil();
	fungsi_floor();
	fungsi_fabs();
	fungsi_log();
	fungsi_sin();
	fungsi_cos();
	fungsi_tan();
}
