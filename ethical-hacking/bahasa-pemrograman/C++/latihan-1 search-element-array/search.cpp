#include<iostream>

void randomArrayElem(int *numbers, int size, int *range)
{
	long number;
	int index = 0;
	bool isThereSame;
	for(int x = 0; x < size; x++)
	{
		while(true)
		{
			isThereSame = 0;
			index++;

			// Generate Random number
			srand(time(0));
			number = ((rand() * index) % range[1]) + 1;

			// apakah termasuk rentang
			if(number >= range[0])
			{
				// Mengecek apakah terdapat element yang sama
				for(int j = 0; j < (x+1); j++)
				{
					// Jika ya, isThereSame di set 1. Dan tidak akan keluar dari looping
					if(number == numbers[j])
					{
						isThereSame = 1;
						break;
					}
				}
				
				// Jika terdapat element yang sama, maka masih looping
				if(!isThereSame)
					break;
			}
		}
		
		// Isi numbers[x] dengan number
		std::cout << number << " " << std::flush;		
		numbers[x] = number;
	}
	std::cout << '\n';
}

int findElem(int *numbers, int size, int input)
{
	int temp;
	for(int x = 0; x < size; x++)
	{
		// From begin
		if(numbers[x] == input)
		{
			std::cout << "\nI found it! \"" << numbers[x] << "\" in " << "[" << x << "]";
			return x;
		}
		else
			std::cout << numbers[x] << " - [" << x << "] ";
		
		// From end
		temp = size-(x+1);
		if(numbers[temp] == input)
		{
			std::cout << "\nI found it! \"" << numbers[temp] << "\" in " << "[" << temp << "]";
			return temp;
		}
		else
			std::cout << numbers[temp] << " - [" << temp << "]\n";

		// Checking
		if(x == temp)
			return -1;
	}
	return -1;
}

int main(void)
{
	int size = 500,
		 range[2] = {0, 50000},
		 numbers[size], input, result;

	std::cout << "Generating random element" << '\n';
	randomArrayElem(numbers, size, range);
	std::cout << '\n' << "Enter the element: ";
	std::cin >> input;
	
	result = findElem(numbers, size, input);
	if(result == -1)
	{
		std::cout << "I can't find \"" << input << "\" element in the array" << '\n';
		return -1;
	}

	std::cout << '\n' << "##############" << '\n';
	std::cout << "Index of \"" << input << "\" is ";
	std::cout << result << '\n';
	return 0;
}
