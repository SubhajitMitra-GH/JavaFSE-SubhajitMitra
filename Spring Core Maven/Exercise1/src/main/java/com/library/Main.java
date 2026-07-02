package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;
import com.library.repository.BookRepository;

public class Main {
    public static void main(String[] args) {
        // Load the Spring Application Context
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Retrieve the BookService bean
        BookService bookService = (BookService) context.getBean("bookService");
        bookService.performService();

        // Retrieve the BookRepository bean
        BookRepository bookRepository = (BookRepository) context.getBean("bookRepository");
        bookRepository.getBooks();

        System.out.println("Spring application context loaded successfully for Exercise 1!");
    }
}
