# Unhandled Exception in TypeScript Function

This repository demonstrates a common error in TypeScript:  unhandled exceptions. The `calculateArea` function throws an error if negative dimensions are provided, but the calling code doesn't handle this exception, leading to program termination.

## Bug

The `bug.ts` file contains the faulty code.  The `calculateArea` function correctly throws an error for invalid inputs. However, the `printNumber` function never executes because the exception is unhandled.

## Solution

The `bugSolution.ts` file shows how to handle the exception using a `try...catch` block. This allows the program to continue execution even if an error occurs, providing more robust error handling.