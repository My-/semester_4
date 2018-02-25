#include <stdio.h>
#include <stdlib.h>

typedef struct {
    long isbn;
    char title[30], author[25];
    double price;
}Book;

// functions
long getISBN();
void addBook(Book* books, int size);
void displayBook(Book* books, int size);
void editBook(Book* books, int size);

void main(){
    Book *books;
    int size, menu = 0;

    // create array
    printf("Enter number of books:");
    scanf("%d", &size);
    books = (Book*)malloc(sizeof(Book) * size);

    // initialize array
    for(int i = 0; i < size; i++){
        (books +i)->isbn = 0l;
    }

    // menu
    do{
        printf("1 - Add book\n2 - Display book\n3 - Edit book\n");
        scanf("%d", &menu);

        switch(menu){
            case 1: addBook(books, size); break;
            case 2: displayBook(books, size); break;
            case 3: editBook(books, size); break;
        }
    }while(menu != -1);

}

/**
*   Adds book to given books array
*/
void addBook(Book* books, int size){
    for(int i = 0; i < size; i++){
        if(books[i].isbn == 0){
            printf("Position: %d\n", i);
            printf("Enter book no: ");
            scanf("%ld", &books[i].isbn);

            printf("Enter book title: ");
            scanf("%s", books[i].title);

            printf("Enter book author: ");
            scanf("%s", books[i].author);

            printf("Enter book price: ");
            scanf("%lf", &books[i].price);

            return; // exit function
        }
    }

    printf("Here is no enough stace four new book");
}

/**
*   Ask user to enter ISBN number
*/
long getISBN(){
    long isbn;
    printf("Enter ISBN: ");
    scanf("%ld", &isbn);
    return isbn;
}

/**
*   Displays choosen book
*/
void displayBook(Book* books, int size){
    long isbn = getISBN();

    for(int i = 0; i < size; i++){
        if(books[i].isbn == isbn){
            printf("Book:\n\t\"%s\"\n\tauthor: %s\n\tISBN: %ld\n\tprice: %.2lf\n", books[i].title, books[i].author, books[i].isbn, books[i].price);
        }
    }
}

/**
*   Eddits choosen book price
*/
void editBook(Book* books, int size){
    int isbn = getISBN();

    for(int i = 0; i < size; i++){
        if(books[i].isbn == isbn){
            printf("Found book:\n\t\"%s\"\n\tauthor: %s\n\tISBN: %ld\n\tprice: %.2lf\n",
                    books[i].title, books[i].author, books[i].isbn, books[i].price);

            printf("Enter new price: ");
            scanf("%lf", &books[i].price);

            return; // exit. short circuit
        }
    }
}
