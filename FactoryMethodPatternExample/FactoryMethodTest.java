package FactoryMethodPatternExample;

public class FactoryMethodTest {

    public static void main(String[] args) {
        // Create WordDocument using WordDocumentFactory
        DocumentFactory wordFactory = new WordDocumentFactory();
        Document wordDoc = wordFactory.createDocument();
        wordDoc.open();

        // Create PdfDocument using PdfDocumentFactory
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        Document pdfDoc = pdfFactory.createDocument();
        pdfDoc.open();

        // Create ExcelDocument using ExcelDocumentFactory
        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Document excelDoc = excelFactory.createDocument();
        excelDoc.open();
    }
}
