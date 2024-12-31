function printArray(arr: any[]): void {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'object') {
      console.log(JSON.stringify(arr[i], null, 2)); // Use JSON.stringify for objects
    } else {
      console.log(arr[i]);
    }
  }
}

const myArray: number[] = [1, 2, 3, 4, 5];
printArray(myArray); //This works fine

const myStringArray: string[] = ['a', 'b', 'c', 'd', 'e'];
printArray(myStringArray); // This also works fine

const myMixedArray: (number | string)[] = [1, 'a', 2, 'b', 3];
printArray(myMixedArray); // This works fine too

const myObjectArray: { name: string; age: number }[] = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
];
printArray(myObjectArray); // This will now print the object contents correctly