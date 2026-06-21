# Exercise 2: E-commerce Platform Search Function

This project implements and analyzes Linear Search and Binary Search algorithms for optimizing the search functionality of an e-commerce platform.

## 1. Asymptotic Notation

### Big O Notation
Big O notation is a mathematical notation used in computer science to describe the performance or complexity of an algorithm. It specifically characterizes the worst-case scenario by defining an upper limit on the execution time or space required relative to the input size $N$. It helps in comparing different algorithms independently of hardware configurations, operating systems, or compiler optimizations.

### Search Operation Scenarios
- **Best-Case Scenario**: The minimum number of steps required to find the target element.
  - Linear Search: $O(1)$ (target is at the very beginning of the array).
  - Binary Search: $O(1)$ (target is at the exact middle index of the array).
- **Average-Case Scenario**: The expected number of steps averaged over all possible inputs.
  - Linear Search: $O(N)$ (on average, searches half of the array).
  - Binary Search: $O(\log N)$ (divides the search space in half repeatedly).
- **Worst-Case Scenario**: The maximum number of steps required to find the target element (or confirm it doesn't exist).
  - Linear Search: $O(N)$ (target is at the end of the array or not present).
  - Binary Search: $O(\log N)$ (search space is reduced to 1 element).

---

## 2. Setup and Implementation

The implementation is located under `EcommerceSearch/`:
- `Product.java`: Defines the model class with attributes `productId`, `productName`, and `category`.
- `SearchTest.java`: Implements linear and binary search algorithms, sorts the product array, and executes both searches to verify functionality.

---

## 3. Analysis and Comparison

### Time Complexity Comparison

| Algorithm | Best Case | Average Case | Worst Case | Space Complexity | Array Requirement |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Linear Search** | $O(1)$ | $O(N)$ | $O(N)$ | $O(1)$ | Unsorted / Sorted |
| **Binary Search** | $O(1)$ | $O(\log N)$ | $O(\log N)$ | $O(1)$ | Must be Sorted |

### Suitability for an E-commerce Platform

For an e-commerce platform, **Binary Search** is highly preferred over Linear Search for search operations because:
1. **Scale**: E-commerce platforms typically have thousands or millions of products. While a linear search of 1,000,000 items takes up to 1,000,000 comparisons in the worst case, binary search takes at most $\approx 20$ comparisons ($\log_2(1,000,000) \approx 20$).
2. **Frequency of Search vs Update**: Product lists are searched much more frequently than they are updated (inserted or deleted). Although binary search requires the array to be sorted (adding an $O(N \log N)$ sorting cost upfront or during inserts), the cost of sorting is amortized over thousands of rapid $O(\log N)$ search queries.
