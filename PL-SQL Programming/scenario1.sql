DECLARE
    v_age NUMBER;
BEGIN
    FOR r_cust IN (SELECT CustomerID, DOB FROM Customers) LOOP
        v_age := MONTHS_BETWEEN(SYSDATE, r_cust.DOB) / 12;
        IF v_age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = r_cust.CustomerID;
        END IF;
    END LOOP;
    COMMIT;
END;
/
