#include <stdio.h>
#include <stdlib.h>
#include <string.h>
// #include <curses.h>

#define FILE_NAME "data.txt"

void main() {

    FILE* pFile;

    int totalDaylySales = 0, maxHardware = 0, maxGrocery = 0, maxDrapery = 0;
    float averageHardware = 0, averageGrocery = 0, averageDrapery = 0;
    int totalHardware = 0, totalGrocery = 0, totalDrapery = 0;

    pFile = fopen(FILE_NAME, "r"); // open file in "Read" mode

    if( pFile == NULL){ printf("File cant be open!!"); }
    else{

        while(!feof(pFile)){
            char department[10];
            int value;

            fscanf(pFile, "%s", department);
            if( fscanf(pFile, "%d", &value) < 1){ break; }

            if( !strcmp(department, "Hardware") ){ // if department is Hardware
                if( maxHardware < value){ maxHardware = value; }
                averageHardware += value;
                totalHardware++;
            }else if( !strcmp(department, "Grocery") ){ // if department is Grocery
                if( maxGrocery < value){ maxGrocery = value; }
                averageGrocery += value;
                totalGrocery++;
            }else if( !strcmp(department, "Drapery") ){ // if department is Drapery
                if( maxDrapery < value){ maxDrapery = value; }
                averageDrapery += value;
                totalDrapery++;
            }
            totalDaylySales += value;
        }
        fclose(pFile); // close file

        // avrerages
        averageHardware /= totalHardware;
        averageGrocery /= totalGrocery;
        averageDrapery /= totalDrapery;

        // output
        printf("Total Dayly sales: %d\n", totalDaylySales);
        printf("Average sales:\n\tHardware: %.2f\n\tGrocery: %.2f\n\tDrapery: %.2f\n",
                averageHardware, averageGrocery, averageDrapery);
        printf("Maximum sales:\n\tHardware: %d\n\tGrocery: %d\n\tDrapery: %d\n",
                maxHardware, maxGrocery, maxDrapery);
    }
}
