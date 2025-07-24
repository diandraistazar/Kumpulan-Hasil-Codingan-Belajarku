struct tttInfo{
	char chara;
	int x, y;
} Player, Bot;

struct boardinfo{
	int x, y, left;
} board;

// Size of board
int board_sz[2] = {3, 3};	// Means 8x8

char default_val = ' ';
std::string massage[] = {"YOU WIN!", "YOU LOSE!", "TIE!"};

// Function prototypes
void clearArray(void);
void initBoard(void);
void printBoard(void);
void getUsrInput(void);
void getCmpInput(void);
void parserInput(std::string &buffer);
int checking(void);
