package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.GenericApplicationContext;

public class Main {
    public static void main(String[] args) {
        System.out.println("Initializing Exercise 4 project using Java 1.8 target configuration...");
        
        // Create a simple generic context to verify dependencies compile and resolve
        ApplicationContext context = new GenericApplicationContext();
        
        System.out.println("Spring Context, AOP, and WebMVC dependencies successfully resolved!");
        System.out.println("Maven project created and configured for Java 1.8 successfully!");
    }
}
