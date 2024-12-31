# TypeScript: Unexpected '[object Object]' output when printing array of objects

This repository demonstrates a common issue encountered when working with arrays of objects in TypeScript.  The `printArray` function attempts to print each element of an array, regardless of its type.  However, when the array contains objects, instead of the object's properties being printed, '[object Object]' is printed repeatedly.

The issue stems from how JavaScript handles object logging to the console; by default, it doesn't automatically serialize the object's properties.  This is true even if the array is correctly typed in TypeScript.

The solution demonstrates how to address this by properly handling objects within the `printArray` function. 

## How to reproduce
1. Clone this repository.
2. Navigate to the repository's root directory.
3. Compile and run the `bug.ts` file using the TypeScript compiler (tsc bug.ts && node bug.js). 
4. Observe the unexpected output for the `myObjectArray`.