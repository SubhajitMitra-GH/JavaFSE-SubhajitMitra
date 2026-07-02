package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // Setter method for dependency injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void performService() {
        System.out.println("BookService: Delegating library operations to repository...");
        if (bookRepository != null) {
            bookRepository.getBooks();
        } else {
            System.out.println("BookService ERROR: BookRepository dependency has NOT been injected!");
        }
    }
}
