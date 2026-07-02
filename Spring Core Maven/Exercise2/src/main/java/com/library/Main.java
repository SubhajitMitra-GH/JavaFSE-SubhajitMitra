package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;

public class Main {
    public static void main(String[] args) {
        // Load the Spring Application Context
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Retrieve the BookService bean (which should have BookRepository injected)
        BookService bookService = (BookService) context.getBean("bookService");
        
        // Execute service method to verify dependency injection
        bookService.performService();

        System.out.println("Spring Dependency Injection verified successfully for Exercise 2!");
    }
}
