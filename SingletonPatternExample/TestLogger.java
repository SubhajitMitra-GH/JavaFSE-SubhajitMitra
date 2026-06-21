package SingletonPatternExample;

public class TestLogger {

    public static void main(String[] args) {

        // Get Logger instance for the first time
        Logger logger1 = Logger.getInstance();
        logger1.log("First message");

        // Get Logger instance again
        Logger logger2 = Logger.getInstance();
        logger2.log("Second message");

        // Verify that both references point to the same object
        if (logger1 == logger2) {
            System.out.println("Only one Logger instance exists.");
        } else {
            System.out.println("Multiple Logger instances exist.");
        }
    }
}