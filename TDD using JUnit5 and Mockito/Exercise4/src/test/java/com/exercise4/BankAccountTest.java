package com.exercise4;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class BankAccountTest {

    private BankAccount account;

    @Before
    public void setUp() {
        // Arrange phase for all tests using a test fixture
        System.out.println("Setting up: Creating bank account with initial balance 100.0");
        account = new BankAccount(100.0);
    }

    @After
    public void tearDown() {
        System.out.println("Tearing down: Cleaning up resources / resetting references");
        account = null;
    }

    @Test
    public void testDeposit() {
        // Arrange (already done in setUp)
        double depositAmount = 50.0;

        // Act
        account.deposit(depositAmount);

        // Assert
        assertEquals(150.0, account.getBalance(), 0.001);
    }

    @Test
    public void testWithdraw() {
        // Arrange (already done in setUp)
        double withdrawalAmount = 30.0;

        // Act
        account.withdraw(withdrawalAmount);

        // Assert
        assertEquals(70.0, account.getBalance(), 0.001);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testNegativeDepositThrowsException() {
        // Act & Assert
        account.deposit(-10.0);
    }
}
