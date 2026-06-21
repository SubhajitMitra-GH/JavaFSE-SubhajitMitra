CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    IsVIP VARCHAR2(5) DEFAULT 'FALSE'
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER,
    DueDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER,
    LastUpdate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Department VARCHAR2(50),
    Salary NUMBER
);

INSERT INTO Customers (CustomerID, Name, DOB, Balance) VALUES (1, 'Alice Smith', TO_DATE('1955-05-15', 'YYYY-MM-DD'), 12000);
INSERT INTO Customers (CustomerID, Name, DOB, Balance) VALUES (2, 'Bob Johnson', TO_DATE('1980-08-20', 'YYYY-MM-DD'), 8500);
INSERT INTO Customers (CustomerID, Name, DOB, Balance) VALUES (3, 'Charlie Brown', TO_DATE('1961-12-10', 'YYYY-MM-DD'), 15000);

INSERT INTO Loans (LoanID, CustomerID, InterestRate, DueDate) VALUES (101, 1, 8.5, SYSDATE + 15);
INSERT INTO Loans (LoanID, CustomerID, InterestRate, DueDate) VALUES (102, 2, 9.0, SYSDATE + 45);
INSERT INTO Loans (LoanID, CustomerID, InterestRate, DueDate) VALUES (103, 3, 7.5, SYSDATE + 20);

INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastUpdate) VALUES (201, 1, 'Savings', 12000, SYSDATE);
INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastUpdate) VALUES (202, 2, 'Checking', 8500, SYSDATE);
INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastUpdate) VALUES (203, 3, 'Savings', 15000, SYSDATE);

INSERT INTO Employees (EmployeeID, Name, Department, Salary) VALUES (501, 'John Doe', 'HR', 50000);
INSERT INTO Employees (EmployeeID, Name, Department, Salary) VALUES (502, 'Jane Smith', 'IT', 75000);
INSERT INTO Employees (EmployeeID, Name, Department, Salary) VALUES (503, 'Mike Brown', 'IT', 60000);
