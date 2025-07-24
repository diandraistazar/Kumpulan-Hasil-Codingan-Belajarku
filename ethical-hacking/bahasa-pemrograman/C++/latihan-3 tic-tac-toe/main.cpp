/* TicTacToe sederhana 
 * Bekerja semestinya, meski kadang terdapat bug
 * Tapi yaudah lah ya, yang penting tujuan utama terpenuhi 
 * dalam membuat game TicTacToe sederhana!*/

#include<iostream>
#include<vector>
#include<sstream>
#include<string>
#include"main.h"

/*
TODO
- Dapat menentukan secara ekplisit ukuran board-nya
- Dapat menentukan karakter-nya
- Melakukan pengecekan melalui looping, tanpa satu persatu menggunakan if-else
- Random position untuk bot
*/

char **boardptr = nullptr;

int main(void){
	board.x = board_sz[0];
	board.y = board_sz[1];
	board.left = board_sz[0] * board_sz[1];
	
	Player.chara = 'o';
	Bot.chara = 'x';
	
	initBoard();
	
	int err;
	while(true){
		printBoard();

		err = checking();
		if(err == 1){	// Menang
			std::cout << massage[0] << '\n';
			break;
		}
		if(err == 2){  // Kalah
			std::cout << massage[1] << '\n';
			break;
		}
		if(err == 3){	// Seri
			std::cout << massage[2] << '\n';
			break;
		}

		getUsrInput();
		getCmpInput();
	}
	std::cout << "Program closed\n";
	clearArray();
	return 0;
}

void initBoard(void){
	// create ROWS
	boardptr = new char*[board.x];
	
	// create COLUMS
	for(int x = 0; x < board.x; x++)
		boardptr[x] = new char[board.y];

	// Isi default_val pada array 2D
	for(int ROWS = 0; ROWS < board.x; ROWS+=1){
		for(int COLUMS = 0; COLUMS < board.y; COLUMS+=1){
			boardptr[ROWS][COLUMS] = default_val;
		}
	}
}

void printBoard(void){
	std::cout << board_sz[0] << 'x' << board_sz[1] << " Mode";
	std::cout << '\t' << "You is \"" << Player.chara << "\"\n";

	short index = 2;
	while(index--){
		for(int y = 0; y < board.y; y++){
			for(int x = 0; x < (board.x * 4)+1; x++){
				std::cout << '-';
			}
			std::cout << '\n';	// New Line
			
			// Checking
			if(index == 0)
				break;

			for(int x = 0; x < board.x; x++){
				std::cout << "| " << boardptr[y][x] << " ";
			}
			std::cout << "|\n";	// | + New Line
		}
	}
}

void getUsrInput(void){
	std::string buffer;

	while(true){
		std::cout << "(y & x): ";
		std::getline(std::cin >> std::ws, buffer);
		
		parserInput(buffer);		// Parse user input as integer value
		
		if( (Player.y >= board_sz[1] || Player.y < 0) || (Player.x >= board_sz[0] || Player.x < 0) ){
			std::cout << "Enter a valid position!\n";
			continue;
		}
		
		if( (boardptr[Player.y][Player.x] == Player.chara) || (boardptr[Player.y][Player.x] == Bot.chara) ){
			std::cout << "Please, another location\n";
			continue;
		}
		
		boardptr[Player.y][Player.x] = Player.chara;
		break;
	}
	board.left -= 1;
}

void getCmpInput(void){
	int index = 0;
	if(board.left == 0)
		return;

	while(true){
		index+=1;
		srand(time(0));
		Bot.y = (rand() + index * 2) % board_sz[0];
		Bot.x = (rand() + index) % board_sz[1];

		if(boardptr[Bot.x][Bot.y] == default_val)
			break;
	}
	boardptr[Bot.x][Bot.y] = Bot.chara;
	board.left-=1;
}

void parserInput(std::string &buffer){
	std::stringstream buff_strm(buffer);
	std::vector<std::string> values;
	std::string temp;

	while(std::getline(buff_strm, temp, ' '))
		values.push_back(temp);
	
	Player.y = std::stoi(values[0])-1;
	Player.x = std::stoi(values[1])-1;
}

int checking(void){
	int hit = 0, COLUMS_TEMP;
	char char_befor;

	// Checking COLUMS
	for(int COLUMS = 0; COLUMS < board.x; COLUMS++){
		char_befor = boardptr[0][COLUMS];
		if(char_befor == default_val)
			continue;

		for(int ROWS = 0; ROWS < board.y; ROWS++)
			if(boardptr[ROWS][COLUMS] == char_befor){
				hit+=1;
				char_befor = boardptr[ROWS][COLUMS];
			}
			else break;

		if(hit == board.y)
			return (char_befor == Player.chara ? 1 : 2);

		hit = 0;
	}
	
	// Checking ROWS (fungsionalitas hampir sama dengan checking COLUMS, hanya di edit sediki)
	for(int ROWS = 0; ROWS < board.y; ROWS++){
		char_befor = boardptr[ROWS][0];
		if(char_befor == default_val)
			continue;
		
		for(int COLUMS = 0; COLUMS < board.x; COLUMS++)
			if(boardptr[ROWS][COLUMS] == char_befor){
				hit+=1;
				char_befor = boardptr[ROWS][COLUMS];
			}
			else break;

		if(hit == board.x)
			return (char_befor == Player.chara ? 1 : 2);

		hit = 0;
	}

	// Checking silang dari kiri ke kanan
	for(int COLUMS = 0; COLUMS < board.x; COLUMS++){
		if( (board.x - COLUMS) > board.y )
				break;

		char_befor = boardptr[0][COLUMS];
		if(char_befor == default_val)
			continue;
		
		COLUMS_TEMP = COLUMS;
		for(int ROWS = 0; ROWS < board.y; ROWS++){
						
			if(boardptr[ROWS][COLUMS_TEMP] == char_befor){
				char_befor = boardptr[ROWS][COLUMS_TEMP];
				COLUMS_TEMP+=1;
				hit+=1;
			}
			else break;
		}
		if(hit == board.y)
			return (char_befor == Player.chara ? 1 : 2);

		hit = 0;
	}

	// Checking silang dari kanan ke kiri
	for(int COLUMS = 0; COLUMS < board.x; COLUMS++){
		if( (board.x - COLUMS) > board.y )
			break;

		char_befor = boardptr[board.y-1][COLUMS];
		if(char_befor == default_val)
			continue;
		
		COLUMS_TEMP = COLUMS;
		for(int ROWS = board.y-1; ROWS >= 0; ROWS--){
						
			if(boardptr[ROWS][COLUMS_TEMP] == char_befor){
				char_befor = boardptr[ROWS][COLUMS_TEMP];
				COLUMS_TEMP+=1;
				hit+=1;
			}
			else break;
		}
		if(hit == board.y)
			return (char_befor == Player.chara ? 1 : 2);

		hit = 0;
	}

	if(board.left == 0)
		return 3;

	return 0;
}

void clearArray(void){
	int ROWS = board_sz[0];
	while(ROWS--) delete[] boardptr[ROWS];
	delete[] boardptr;
}
