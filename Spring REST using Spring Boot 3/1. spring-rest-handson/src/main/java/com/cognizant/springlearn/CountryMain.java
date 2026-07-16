package com.cognizant.springlearn;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class CountryMain {
    public static void main(String[] args) {
        // Load the Spring Application Context using ClassPathXmlApplicationContext
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

        // Retrieve the country bean
        Country country = (Country) context.getBean("country");

        // Print the bean representation
        System.out.println("Loaded Country Bean: " + country);

        // Close the application context
        context.close();
    }
}
