#include<iostream>

int main(void)
{
	// std::string memiliki ukuran 24 atau 32 bytes, karena dia adalah object string.
	std::string my_name[] = {"Diandra", "Mita"};
	short age = 16;
	bool isHeGoodPerson = true;

	std::cout << my_name[0] << " = " << sizeof(my_name) << " bytes" << '\n';
	std::cout << my_name[0] << " = " << sizeof(std::string) << " bytes" << '\n';
	std::cout << age << " = " << sizeof(age) << " bytes" << '\n';
	std::cout << (isHeGoodPerson ? "He is a good person" : "He isn't a good person") << " = " << sizeof(isHeGoodPerson) << " bytes" << '\n';
	return 0;
}
