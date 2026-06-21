# Singleton Pattern Example in Java

This project demonstrates the implementation of the **Singleton Design Pattern** in Java.

## Scenario
Ensure that a logging utility class (`Logger`) has exactly one instance throughout the application lifecycle to guarantee consistent logging.

## Implementation Details

### `Logger.java`
The `Logger` class is implemented using the lazy initialization Singleton pattern inside the `SingletonPatternExample` package:
1. **Private Static Instance**: `private static Logger instance` stores the single instance.
2. **Private Constructor**: Prevents instantiation of the class from outside.
3. **Public Static Getter**: `public static Logger getInstance()` provides global access to the single instance, creating it if it doesn't already exist.

### `TestLogger.java`
A test class that verifies the implementation:
1. Retrieves the logger instance twice (`logger1` and `logger2`).
2. Compares their references using `==` to verify they point to the exact same instance in memory.
3. Calls the `log` method using both references.

## How to Compile and Run

From the project root directory (containing the `SingletonPatternExample` folder):

1. Compile the Java source files:
   ```bash
   javac SingletonPatternExample/Logger.java SingletonPatternExample/TestLogger.java
   ```

2. Run the test application:
   ```bash
   java SingletonPatternExample.TestLogger
   ```
