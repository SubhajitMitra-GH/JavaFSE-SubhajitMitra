BEGIN
    FOR r_loan IN (
        SELECT c.Name, l.LoanID, l.DueDate
        FROM Loans l
        JOIN Customers c ON l.CustomerID = c.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Customer ' || r_loan.Name || ' (Loan ID: ' || r_loan.LoanID || ') has a loan due on ' || TO_CHAR(r_loan.DueDate, 'YYYY-MM-DD') || '.');
    END LOOP;
END;
/
