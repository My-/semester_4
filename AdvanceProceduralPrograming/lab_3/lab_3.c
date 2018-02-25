/*
    Mindaugas Sharskus
    15/02/2018
*/

#include <stdio.h>
#include <stdlib.h>

int** creteTable(int rows, int columns);
void freeTableMemory(int** table, int rows);
void populateTable(int** table, int rows, int columns);
void displayTable(int **table, int rows, int column);
int* getWins(int **table, int rows, int column);
void displayArrayData(int *table, int length);
void dispalyWinner(int* data, int length);
void createFile(char* fileName, int** data, int rows, int columns);

void main() {
    int **datatable, *winsData;
    int states, candidates, votes;

    // get table sizes
    printf("Enter number of states: ");
    scanf("%d", &states);
    printf("Enter number of candidates: ");
    scanf("%d", &candidates);

    datatable = creteTable(states, candidates); // create table
    populateTable(datatable, states, candidates); // papulate table with data
    displayTable(datatable, states, candidates); // show entered data
    winsData = getWins(datatable, states, candidates); // get wins for each candidate
    printf("Each candidate win data:\n");
    displayArrayData(winsData, candidates); // display candidates wins
    dispalyWinner(winsData, candidates); // find & and show winner

    createFile("votes.txt", datatable, states, candidates);
    freeTableMemory(datatable, states); // house keeping
}

/**
*   Creates table (2D int array).
*   NOTE: do not initialize to 0 (zero) each value.
*/
int** creteTable(int rows, int columns){
    // create "rows"
    int** table = (int**)malloc(rows * sizeof(int*));
    // create "columns"
    for(int i = 0; i < rows; i++){
        *(table +i) = (int*)malloc(columns * sizeof(int));
    }
    return table;
}

/**
*   Frees memory from given table.
*/
void freeTableMemory(int** table, int rows){
    for(int i = 0; i < rows; i++){
        free(table[i]);
    }
    free(table);
}

/**
*   Populates given table with the values entered by user.
*   NOTE: negative values can't be entered.
*/
void populateTable(int** table, int rows, int columns){
    for(int row = 0; row < rows; row++){
        for(int col = 0; col < columns; col++){
            // validate
            do{
                printf("Enter state %d total votes for candidate %d: ", row +1, col +1);
                scanf("%d", (*(table +row) + col));
            }while(*(*(table +row) + col) < 0);
        }
    }
}

/**
*   Displays content of the given table (2d array)
*/
void displayTable(int **table, int rows, int columns){
    for(int i = 0; i < rows; i++){
        printf("\nState %d : ", i+1);
        for(int j = 0; j < columns; j++){
            printf("%5d", table[i][j]);
        }
    }
    printf("\n\n");
}

/**
*   Displays content of the given single dimentional array
*/
void displayArrayData(int *data, int length){
    printf("\n");
    for(int i = 0; i < length; i++){
        printf("%3d", data[i]);
    }
    printf("\n\n");
}

/**
*   Finds biggest number in each row and marks(ads one)
*   coresponding position in single dimentional array.
*   NOTE: if here two numbers 'biggest' numbers marks first one.
*   Returns single dimentional array with marked winners.
*/
int* getWins(int **table, int rows, int columns){
    int winnerPos;
    int *winsData = (int*)malloc(columns * sizeof(int));
    // reset data to 0 (zero)
    for(int i = 0; i < columns; i++){
        (*(winsData+i)) = 0;
    }

    // find winners
    for(int i = 0; i < rows; i++){
        winnerPos = 0;
        for(int j = 1; j < columns; j++){
            if( table[i][j] > table[i][winnerPos] ){
                winnerPos = j;
            }
        }
        printf("State %d winner is: %d candidate.\n", i+1, winnerPos+1);
        (*(winsData + winnerPos))++;
    }

    return winsData;
}

/**
*   Finds and displays winer (higest numbers position).
*   NOTE: if here two winners, function picks firs one.
*/
void dispalyWinner(int* data, int length){
    int winnerPos = 0;
    for(int i = 1; i < length; i++){
        if(data[i] > winnerPos){
            winnerPos = i;
        }
    }
    printf("Winner is: %d!!", winnerPos);
}

/**
*   Writes table data to file.
*/
void createFile(char* fileName, int** table, int rows, int columns){
    FILE* pFile;

    pFile = fopen(fileName, "w"); // open file in "Write" mode

    if( pFile == NULL){ printf("File cant be open!!"); }
    else{
        for(int i = 0; i < rows; i++){
            fprintf(pFile, "\n");
            for(int j = 0; j < columns; j++){
                fprintf(pFile, "%3d", table[i][j]);
            }
        }
        fclose(pFile); // close file
    }
}
