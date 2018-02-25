// Mindaugas Sharskus
// 8/2/2018

#include <stdio.h>
#include <stdlib.h>

typedef struct {
    char *name;
    int regNo;
    int vatNo;
}Company;

void main() {
    int maxCompanies, nameLength;

    printf("Enter number of companies you would like to enter: ");
    scanf("%d", &maxCompanies);

    // declare dynamick array
    Company *companies = (Company*)malloc(maxCompanies * sizeof(Company));

    // populate companies array
    for( int i = 0; i < maxCompanies; i++){
        printf("Enter companies %d name length: ", i);
        scanf("%d", &nameLength);

        (companies + i)->name = (char*)malloc(nameLength * sizeof(char));

        printf("Enter company %d name, registration number and vat number: \n", i);
        scanf("%s %d %d", (companies + i)->name, &(companies + i)->regNo, &(companies + i)->vatNo);
    }

    // Dispaly array data
    printf("Companies:\n");
    for( int i = 0; i < maxCompanies; i++){
        printf("\t%s %d %d\n", (companies + i)->name, (companies + i)->regNo, (companies + i)->vatNo);
    }

    // write to file
    FILE* pFile;
    char fileName[] = "companiesOut.txt";

    pFile = fopen(fileName, "w"); // open file in "Write" mode

    if( pFile == NULL){ printf("File cant be open!!"); }
    else{

        for(int i = 0; i < maxCompanies; i++){
            fprintf(pFile, "Companys %d name: %s, registration number: %d, VAT number: %d\n", i, (companies + i)->name, (companies + i)->regNo, (companies + i)->vatNo);
        }
        fclose(pFile); // close file
    }

    // free memory
    for(int i = 0; i < maxCompanies; i++){
        free((companies + i)->name);
    }
    free(companies);

}
