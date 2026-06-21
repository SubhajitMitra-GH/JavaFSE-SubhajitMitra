# Exercise 7: Financial Forecasting

This project implements and analyzes a recursive algorithm for predicting future financial values based on a constant growth rate.

## 1. Understanding Recursive Algorithms

### Concept of Recursion
Recursion is a programming technique where a method calls itself to solve smaller instances of the same problem. Every recursive function consists of:
1. **Base Case**: The condition under which the recursion stops. Without this, the function would execute infinitely, leading to a `StackOverflowError`.
2. **Recursive Step**: The part of the function where the problem is broken down into a smaller sub-problem, and the function calls itself.

### How Recursion Simplifies Problems
Recursion is highly useful for problems that can be naturally divided into similar, repetitive sub-problems. It replaces complex loop nesting and state tracking with clean, readable code. Typical use cases include tree traversals, directory structural processing, and mathematical progressions (like Fibonacci numbers or compounding interest calculations).

---

## 2. Setup and Implementation

The implementation is located under `FinancialForecasting/`:
- `FinancialForecasting.java`: Implements a recursive method `calculateFutureValue` that computes compounding growth over a specified number of years, and prints the result.

---

## 3. Analysis and Optimization

### Time Complexity
- **Time Complexity**: $O(N)$ where $N$ is the number of years (periods). The method makes exactly $N$ recursive calls, and each call performs $O(1)$ operations.
- **Space Complexity**: $O(N)$ auxiliary space due to the call stack. Each recursive call places a new stack frame on the call stack.

### Optimization of Recursive Solutions
For basic compounding, the call stack size grows linearly. To avoid excessive memory usage (`StackOverflowError` for large $N$) or redundant calculations (like in Fibonacci recursion):
1. **Memoization (Top-down Dynamic Programming)**: Cache already calculated results in a map or array so they don't need to be computed again.
2. **Iteration (Bottom-up)**: Convert the recursive solution into a simple iterative loop. Iteration runs in $O(N)$ time but uses $O(1)$ space, completely avoiding the call stack overhead.
3. **Tail Recursion**: If the compiler supports tail-call optimization (TCO), restructuring the recursion so the recursive call is the final operation allows reuse of stack frames.
