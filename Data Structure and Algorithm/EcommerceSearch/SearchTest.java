package EcommerceSearch;

import java.util.Arrays;

public class SearchTest {

    public static Product linearSearch(Product[] products, String targetId) {
        for (Product product : products) {
            if (product.getProductId().equals(targetId)) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int comparison = products[mid].getProductId().compareTo(targetId);

            if (comparison == 0) {
                return products[mid];
            } else if (comparison < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product("P101", "Laptop", "Electronics"),
            new Product("P102", "Smartphone", "Electronics"),
            new Product("P103", "Coffee Maker", "Appliances"),
            new Product("P104", "Running Shoes", "Footwear"),
            new Product("P105", "Headphones", "Electronics")
        };

        Arrays.sort(products, (p1, p2) -> p1.getProductId().compareTo(p2.getProductId()));

        String searchId = "P103";

        Product linearResult = linearSearch(products, searchId);
        if (linearResult != null) {
            System.out.println("Linear Search: Found " + linearResult.getProductName());
        } else {
            System.out.println("Linear Search: Product not found");
        }

        Product binaryResult = binarySearch(products, searchId);
        if (binaryResult != null) {
            System.out.println("Binary Search: Found " + binaryResult.getProductName());
        } else {
            System.out.println("Binary Search: Product not found");
        }
    }
}
