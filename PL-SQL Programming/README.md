# PL/SQL Control Structures and Stored Procedures

This folder contains the SQL and PL/SQL scripts for bank database exercises involving control structures and stored procedures.

## Files Included

### 1. Database Schema
- `schema.sql`: Contains DDL/DML statements to create `Customers`, `Loans`, `Accounts`, and `Employees` tables and insert sample records.

### 2. Exercise 1: Control Structures
- `scenario1.sql`: PL/SQL block to apply a 1% discount to loan interest rates for customers over 60 years old.
- `scenario2.sql`: PL/SQL block to promote customers with a balance over $10,000 to VIP status (`IsVIP = 'TRUE'`).
- `scenario3.sql`: PL/SQL block to fetch and print reminder messages for loans due in the next 30 days.

### 3. Exercise 3: Stored Procedures
- `ProcessMonthlyInterest.sql`: Stored procedure that calculates and updates the balance of all savings accounts by applying an interest rate of 1% to the current balance.
- `UpdateEmployeeBonus.sql`: Stored procedure that updates the salary of employees in a given department by adding a bonus percentage passed as a parameter.
- `TransferFunds.sql`: Stored procedure that transfers a specified amount from one account to another, checking that the source account has sufficient balance before making the transfer.

## How to Run

1. Connect to your Oracle SQL database instance (SQL*Plus, SQL Developer, or Live SQL).
2. Execute `schema.sql` to initialize the database tables and data.
3. Run each PL/SQL file (`scenario1.sql`, `scenario2.sql`, `scenario3.sql`) to execute the control structures.
4. Execute `ProcessMonthlyInterest.sql`, `UpdateEmployeeBonus.sql`, and `TransferFunds.sql` to compile the stored procedures.
5. Invoke the compiled stored procedures using `EXEC` or inside a standard PL/SQL block.
