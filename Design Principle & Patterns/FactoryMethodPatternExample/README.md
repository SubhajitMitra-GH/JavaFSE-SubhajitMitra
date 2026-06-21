# Factory Method Pattern Example in Java

This project demonstrates the implementation of the **Factory Method Design Pattern** for a Document Management System in Java.

## Project Structure
All classes belong to the `FactoryMethodPatternExample` package:
- `Document.java`: Interface representing a document with `open()` method.
- `WordDocument.java`, `PdfDocument.java`, `ExcelDocument.java`: Concrete classes implementing the `Document` interface.
- `DocumentFactory.java`: Abstract factory class containing `createDocument()`.
- `WordDocumentFactory.java`, `PdfDocumentFactory.java`, `ExcelDocumentFactory.java`: Concrete factory implementations that instantiate the respective document type.
- `FactoryMethodTest.java`: Verification driver test file.

## How to Compile and Run

From the root directory:

1. Compile the source code:
   ```bash
   javac FactoryMethodPatternExample/*.java
   ```

2. Run the test application:
   ```bash
   java FactoryMethodPatternExample.FactoryMethodTest
   ```
